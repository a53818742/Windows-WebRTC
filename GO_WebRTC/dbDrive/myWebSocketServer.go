package dbDrive

import (
	"fmt"
	"github.com/Unknwon/goconfig"
	"golang.org/x/net/websocket"
	"log"
	"net/http"
	"reflect"
	"strings"
	_ "strings"
	"sync"
)


type WebSocketClient struct {
	Conn *websocket.Conn
}

type WebSocketClientSelf struct {
	Close bool
	connstr string
	Conn *websocket.Conn
	room string
	username string

}

type WebSocketServer struct {
	clients map[string]*WebSocketClient
	ServerPort string
	maxLen int
	checkTime int64
	mychan chan string
	mutex sync.Mutex
	MyInterface *SocektServerInterface

}
func (this *WebSocketServer) Init(){
	cfg, _ := goconfig.LoadConfigFile("Config.ini")
	this.ServerPort, _ = cfg.GetValue("webrtc服务器", "websocket")

	this.clients = make(map[string]*WebSocketClient)
	this.mychan=make(chan string,1000)
	this.MyInterface=new(SocektServerInterface)
	this.MyInterface.Init()
}


//处理接收到的接口消息
func (this *WebSocketServer) ToInterface(conn  *websocket.Conn,reply string,mystruct  *WebSocketClientSelf){

	buf_str:= UngzipStr(reply)
	mapjson:=JSON2Map(buf_str)
	if len(mapjson)>0 {
		if CheckMapType(mapjson,"room","string")==false {
			return
		}
		if CheckMapType(mapjson,"event","string")==false {
			return
		}
		if CheckMapType(mapjson,"username","string")==false {
			return
		}
		room:=Strval(mapjson["room"])
		event:=Strval(mapjson["event"])
		username:=Strval(mapjson["username"])
		if len(room)==0 || len(username)==0 || len(event)==0 {
			return
		}
		event=strings.ToUpper(event[0:1])+event[1:]

		pp := reflect.ValueOf(this.MyInterface) // 取得struct变量的指针
		fv := pp.MethodByName(event)//获取指定Field
		if fv.String()!="<invalid Value>"{
			params := make([]reflect.Value, 4)                 // 参数
			params[0] = reflect.ValueOf(this)
			params[1] = reflect.ValueOf(conn)
			params[2] = reflect.ValueOf(mapjson)
			params[3] = reflect.ValueOf(mystruct)
			fv.Call(params)

		}

	}


	//this.SendData(conn,[]byte(StrtimeM()),mystruct)
}
func (this *WebSocketServer) SendData(conn *websocket.Conn,data []byte,mystruct  *WebSocketClientSelf){
	if error:= websocket.Message.Send(conn, string(data)); error != nil {

		this.Close(conn,mystruct)
	}
}
func (this *WebSocketServer) CheckThread(){
	for{
		data := <-this.mychan
		mydata:=JSON2Map(data)
		mytype:=Interface2Int64(mydata["type"])
		switch mytype {
			case -1:

				this.mutex.Lock()
				_,ok:=this.clients[Strval(mydata["key"])]
				if ok {
					delete(this.clients,Strval(mydata["key"]))
				}
				this.mutex.Unlock()
		}
	}
}
//开启serverSocket
func (this *WebSocketServer) Run() {
	http.Handle("/websocket",websocket.Handler(this.instantMessage))
	Log("webrtc 房间服务器启动，端口号：",this.ServerPort)
	err:=http.ListenAndServeTLS(":"+this.ServerPort,"./cert/key.pem","./cert/cert.pem",nil)
	//err:=http.ListenAndServe(":1234",nil)
	go this.CheckThread()
	log.Println(err)
}

func (this *WebSocketServer) instantMessage(w *websocket.Conn)  {
	var error error
	uuid:=UniqueId()
	this.NewConnect(w,uuid)
	mystruct :=new(WebSocketClientSelf)
	mystruct.connstr=uuid
	for {
		replay:=""
		if  error= websocket.Message.Receive(w,&replay);error!=nil{
			this.Close(w,mystruct)
			break
		}
		this.ToInterface(w,replay,mystruct)
	}
}

func (this *WebSocketServer) NewConnect(conn *websocket.Conn,connstr string)(bool){
	this.mutex.Lock()
	this.clients[connstr] = new(WebSocketClient)
	this.clients[connstr].Conn = conn
	this.mutex.Unlock()
	return true
}
func (this *WebSocketServer) Close(conn *websocket.Conn,mystruct  *WebSocketClientSelf)(bool){
	this.MyInterface.Close(this,conn,mystruct)
	conn.Close()
	this.mychan<-fmt.Sprintf("{\"key\":\"%s\",\"type\":%d}",mystruct.connstr,-1)
	return true
}
