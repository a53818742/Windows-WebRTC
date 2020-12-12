package dbDrive

import (
	"golang.org/x/net/websocket"
	"sync"
)
type RoomUser struct {
	username 	string  //该用户的用户名
	id 			string  //该用户的服务器ID
	kind        bool    //该用户的用户类型，0普通浏览者，1管理员
}
type Room struct {
	roomnum string       //房间号码
	mainid string       //发起聊天用户的ID
	users map[string]*RoomUser  //房间内的用户，用户ID-用户信息
}


type SocektServerInterface struct {
	room_mutex sync.Mutex
	Rooms map[string]*Room
}
func (this *SocektServerInterface) Init(){
	this.Rooms=make(map[string]*Room)
}
//客户端离线,通知客户端所在房间的所有人，有人离线
func (this *SocektServerInterface) Close(self *WebSocketServer,conn *websocket.Conn,mystruct *WebSocketClientSelf){
	this.room_mutex.Lock()
	self.mutex.Lock()
	if len(mystruct.room)>0 {
		_,ok1:=this.Rooms[mystruct.room]
		if ok1 {

			for key,v :=range this.Rooms[mystruct.room].users {
				if key!=mystruct.connstr {
					_,kk:=self.clients[key]
					if kk {
						self.SendData(self.clients[key].Conn,[]byte(" {\"event\":\"user_close\",\"username\":\""+mystruct.username+"\",\"call\":\""+v.username+"\"}"),mystruct)
					}

				}
			}
			delete(this.Rooms[mystruct.room].users,mystruct.connstr)
		}
	}
	self.mutex.Unlock()
	this.room_mutex.Unlock()
}
/*客户端发送握手消息
{
	"room":room,  //房间号，字符串
	"username":username,	//用户名，字符串
	"event": "hello" //事件类型，握手
}

*/
func (this *SocektServerInterface) Hello(self *WebSocketServer,conn *websocket.Conn,mapjson map[string]interface{},mystruct *WebSocketClientSelf){
	room:=Strval(mapjson["room"])
	username:=Strval(mapjson["username"])
	video:=Strval(mapjson["video"])
	audio:=Strval(mapjson["audio"])
	device:=Strval(mapjson["device"])
	mystruct.username=username
	mystruct.room=room

	_,ok1:=this.Rooms[room]
	if !ok1 {

		//如果房间不存在
		this.room_mutex.Lock()
		//创建，并初始化房间
		this.Rooms[room]=new(Room)
		this.Rooms[room].mainid=mystruct.connstr
		this.Rooms[room].roomnum=room
		this.Rooms[room].users=make(map[string]*RoomUser)
		this.room_mutex.Unlock()
	}
	_,ok1=this.Rooms[room].users[mystruct.connstr]
	if !ok1 {
		this.room_mutex.Lock()
		//如果该用户是首次进入该房间，新建该用户

		this.Rooms[room].users[mystruct.connstr]=new(RoomUser)
		this.Rooms[room].users[mystruct.connstr].kind=true
		this.Rooms[room].users[mystruct.connstr].username=username
		this.room_mutex.Unlock()
	}
	this.room_mutex.Lock()
	self.mutex.Lock()
	Log("房间人数",len(this.Rooms[room].users))
	//然后通知该房间的所有人，有人上线
	for key,_ :=range this.Rooms[room].users {
		if key!=mystruct.connstr {
			_,kk:=self.clients[key]
			if kk {
				self.SendData(self.clients[key].Conn,[]byte(" {\"event\":\"user_hello\",\"audio\":\""+audio+"\",\"device\":\""+device+"\",\"video\":\""+video+"\",\"username\":\""+username+"\"}"),mystruct)
			}

		}
	}
	this.room_mutex.Unlock()
	self.mutex.Unlock()
	self.SendData(conn,[]byte(" {\"event\":\"hello_return\"}"),mystruct)
}

/*客户端发送候选消息*/
func (this *SocektServerInterface) Ice_candidate(self *WebSocketServer,conn *websocket.Conn,mapjson map[string]interface{},mystruct *WebSocketClientSelf){
	if CheckMapType(mapjson,"call","string")==false {
		return
	}
	room:=Strval(mapjson["room"])
	call:=Strval(mapjson["call"])

	_,ok1:=this.Rooms[room]
	if !ok1 {
		return
	}

	this.room_mutex.Lock()
	self.mutex.Lock()
	//然后通知被叫用户
	for key,v :=range this.Rooms[room].users {
		if v.username==call {
			_,kk:=self.clients[key]
			if kk {
				self.SendData(self.clients[key].Conn,[]byte(Map2JSON(mapjson)),mystruct)
			}

		}
	}
	this.room_mutex.Unlock()
	self.mutex.Unlock()

}



/*客户端发送offer消息*/
func (this *SocektServerInterface) Offer(self *WebSocketServer,conn *websocket.Conn,mapjson map[string]interface{},mystruct *WebSocketClientSelf){
	if CheckMapType(mapjson,"call","string")==false {
		return
	}
	room:=Strval(mapjson["room"])
	call:=Strval(mapjson["call"])

	_,ok1:=this.Rooms[room]
	if !ok1 {
		return
	}

	this.room_mutex.Lock()
	self.mutex.Lock()
	//然后通知被叫用户
	for key,v :=range this.Rooms[room].users {
		if v.username==call {

			_,kk:=self.clients[key]
			if kk {
				self.SendData(self.clients[key].Conn,[]byte(Map2JSON(mapjson)),mystruct)
			}

		}
	}
	this.room_mutex.Unlock()
	self.mutex.Unlock()

}



/*客户端发送应答消息*/
func (this *SocektServerInterface) Answer(self *WebSocketServer,conn *websocket.Conn,mapjson map[string]interface{},mystruct  *WebSocketClientSelf){
	if CheckMapType(mapjson,"call","string")==false {
		return
	}
	room:=Strval(mapjson["room"])
	call:=Strval(mapjson["call"])

	_,ok1:=this.Rooms[room]
	if !ok1 {
		return
	}

	this.room_mutex.Lock()
	self.mutex.Lock()
	//然后通知被叫用户
	for key,v :=range this.Rooms[room].users {
		if v.username==call {
			_,kk:=self.clients[key]
			if kk {
				self.SendData(self.clients[key].Conn,[]byte(Map2JSON(mapjson)),mystruct)
			}

		}
	}
	this.room_mutex.Unlock()
	self.mutex.Unlock()
}

/*客户端给其他客户端发送消息*/
func (this *SocektServerInterface) Touser(self *WebSocketServer,conn *websocket.Conn,mapjson map[string]interface{},mystruct  *WebSocketClientSelf){
	if CheckMapType(mapjson,"call","string")==false {
		return
	}
	room:=Strval(mapjson["room"])
	call:=Strval(mapjson["call"])

	_,ok1:=this.Rooms[room]
	if !ok1 {
		return
	}

	this.room_mutex.Lock()
	self.mutex.Lock()
	//然后通知被叫用户
	for key,v :=range this.Rooms[room].users {
		if v.username==call {
			_,kk:=self.clients[key]
			if kk {
				self.SendData(self.clients[key].Conn,[]byte(Map2JSON(mapjson)),mystruct)
			}

		}
	}
	this.room_mutex.Unlock()
	self.mutex.Unlock()
}

/*客户端给房间内所有人发消息*/
func (this *SocektServerInterface) Toall(self *WebSocketServer,conn *websocket.Conn,mapjson map[string]interface{},mystruct  *WebSocketClientSelf){
	room:=Strval(mapjson["room"])

	_,ok1:=this.Rooms[room]
	if !ok1 {
		return
	}

	this.room_mutex.Lock()
	self.mutex.Lock()
	//然后通知被叫用户
	for key,v :=range this.Rooms[room].users {
		if v.username!=Strval(mapjson["username"]) {
			_,kk:=self.clients[key]
			if kk {

				self.SendData(self.clients[key].Conn,[]byte(Map2JSON(mapjson)),mystruct)
			}
		}
	}
	this.room_mutex.Unlock()
	self.mutex.Unlock()
}


