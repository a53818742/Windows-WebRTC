
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var myWebRTC = window.myWebRTC =function(Config) {
	return new myWebRTC.a(Config);
}
myWebRTC.a = myWebRTC .prototype.a = function(Config) {
	this.room=Config.room;
	this.username=Config.username;
	this.stream=111;
	this.socket;
	this.users={};
	this.allclose=false;
	this.audios={};
	this.myBrowser=$$().browserLight();
	this.videos={};//stun:stun.l.google.com:19302
	// this.iceServer ={
	// 	"iceServers": [{
	// 		"url": "stun:www.think-eee.cloud:22407"
	// 	}, {
	// 		"url": "turn:www.think-eee.cloud:22407",
	// 		"username": "zjf",
	// 		"credential": "123456"
	// 	}]
	// };

	
	this.iceServer ={
		"iceServers": [{
			"url": "stun:stun.l.google.com:19302"
		}, {
			"url": "turn:www.think-eee.cloud:22407",
			"username": "webrtc@live.com",
			"credential": "muazkh"
		}]
	};

	this.Config=Config;
	this.loadcss = function() {
		let lin = document.createElement("link");
		lin.setAttribute("class", "mdata-css");
		lin.setAttribute("rel", "stylesheet");
		lin.setAttribute("href", Config.css)
		document.body.appendChild(lin);
	}
	this.sleep=function(n) {
		let start = new Date().getTime();
		while(true)  if(new Date().getTime()-start > n) break;
	}
	this.loadcss();
	return this;
}
myWebRTC.a.prototype.Init=function(){
	this.allclose=false;;
	 if (window.stream) {
	        window.stream.getTracks().forEach(track => {
	            track.stop();
	        });
	    }
	this.InitStream(this.Config)
}
myWebRTC.a.prototype.SendData=function(name,str){
	this.socket.send($$().zip().zip(str));
	//this.sleep(10);
}
myWebRTC.a.prototype.InitWebSocket = function() {
	let that=this;
	that.socket = new WebSocket(that.Config.websocket);
	that.socket.onopen=function(event){
		that.SendData("hello",JSON.stringify({
			"room":that.room,
			"username":that.username,
			"event": "hello",
			"video":that.Config.video,
			"audio":that.Config.audio,
			"device":that.myBrowser.device,
		}));
	}
	that.socket.onerror=function(event){
		console.log("websocket出错",event)
	}
	that.socket.onclose=function(){
		console.log("websocket关闭")
		if(that.allclose==false){
			that.InitWebSocket();
		}
		
	}
	//处理到来的信令
	that.socket.onmessage = function(event) {
		let json = JSON.parse(event.data);
		if(json.event==="touser" || json.event=="toall"){
			//获取服务器返回的握手消息
			try{
				let data=json.data;
				console.log("收到数据:",data)
				if(that.Config.admin!="1"){
					if(data=="Audio"){
						that.AudioControl(true);
					}
					if(data=="NoAudio"){
						that.AudioControl(false);
					}
					if(data=="AudioControl"){
						that.AudioControl();
					}
					if(data=="Video"){
						that.VideoControl(true);
					}
					if(data=="NoVideo"){
						that.VideoControl(false);
					}
					if(data=="VideoChange"){
						that.VideoChange();
					}
				}
				
			}catch(e){
				//TODO handle the exception
			}
			return;
		}
		if(json.event==="hello_return"){
			//获取服务器返回的握手消息
			return;
		}
		if(json.event==="user_close"){
			//某个客户端断开连接

			try{
				that.users[json.username].pc.close()
			}catch(e){
				//TODO handle the exception
			}
			try{
				if(typeof(that.users[json.username].div)=="object"){
					$$().removeElem(that.users[json.username].div);
				}
			}catch(e){
				//TODO handle the exception
			}
			try{
				delete that.users[json.username]
			}catch(e){
				//TODO handle the exception
			}
			return;
		}

		if(json.event==="user_hello"){
			//有其他人上线
			let newinfo=that.Connect2NewUser(json.username,json.video,json.audio,json.device);
			//如果是发起方则发送一个offer信令
			try{
				newinfo.pc.createOffer(function(desc) {
					newinfo.pc.setLocalDescription(desc);
					that.SendData("offer",JSON.stringify({
						"room":that.room,
						"username":that.username,
						"call":json.username,
						"event": "offer",
						"video":that.Config.video,
						"audio":that.Config.audio,
						"device":that.myBrowser.device,
						"data": {
							"sdp": desc
						}
					}));
				}, function(error) {
					console.log('Failure callback: ' + error);
				});
			}catch(e){
				//TODO handle the exception
				console.log(e)
			}
			return;
		}
		if (json.event === "offer") {
			let newinfo=that.Connect2NewUser(json.username,json.video,json.audio,json.device);
			newinfo.pc.setRemoteDescription(new RTCSessionDescription(json.data.sdp));
			newinfo.pc.createAnswer(function(desc) {
				newinfo.pc.setLocalDescription(desc);
				that.SendData("answer",JSON.stringify({
					"room":that.room,
					"username":that.username,
					"call":json.username,
					"event": "answer",
					"video":that.Config.video,
					"audio":that.Config.audio,
					"device":that.myBrowser.device,
					"data": {
						"sdp": desc
					}
				}));
			}, function(error) {
				console.log('Failure callback: ' + error);
			});
		}
		if (json.event === "answer") {
			let newinfo=that.Connect2NewUser(json.username,json.video,json.audio,json.device);
			newinfo.pc.setRemoteDescription(new RTCSessionDescription(json.data.sdp));
			
		}
		//如果是一个ICE的候选，则将其加入到PeerConnection中，否则设定对方的session描述为传递过来的描述
		if (json.event === "ice_candidate") {
			let newinfo=that.Connect2NewUser(json.username,json.video,json.audio,json.device);
			newinfo.pc.addIceCandidate(new RTCIceCandidate(json.data.candidate));
		}
	};
	
	
	
}
myWebRTC.a.prototype.Connect2NewUser=function(new_username,video,audio,device){
	let that=this;
	if(typeof(that.users[new_username])!="undefined"){
		return that.users[new_username];
	};
	
	that.users[new_username]={"pc":0,"div":0,"video":0,"controldiv":0,"controltable":0,"t1":0,"t2":0,"t3":0,"t4":0,"t5":0,"t6":0,"device":device};
	// 创建PeerConnection实例 (参数为null则没有iceserver，即使没有stunserver和turnserver，仍可在局域网下通讯)
	that.users[new_username].pc = new RTCPeerConnection(that.iceServer);
	that.users[new_username].pc.urls=that.iceServer;
	// 发送ICE候选到其他客户端
	that.users[new_username].pc.onicecandidate = function(event) {
		if (event.candidate !== null) {
			that.SendData("ice_candidate",JSON.stringify({
				"room":that.room,
				"username":that.username,
				"event": "ice_candidate",
				"call":new_username,
				"video":that.Config.video,
				"audio":that.Config.audio,
				"device":that.myBrowser.device,
				"data": {
					"candidate": event.candidate
				}
			}));
		}
	};
	
	// 如果检测到媒体流连接到本地，将其绑定到一个video标签上输出
	that.users[new_username].pc.onaddstream = function(event) {
		that.CreateVideo({
			"stream":event.stream,
			"username":new_username,
			"audio":audio,
			"video":video,
			"device":that.users[new_username].device
		})
	};
	that.users[new_username].pc.addStream(that.stream);
	return that.users[new_username];
	
}
myWebRTC.a.prototype.InitStream = function(Config) {
	let that=this;
	
	if(that.Config.video!="close" && that.Config.video!="before" && that.Config.video!="after" && that.Config.video!="screen"){
		//绑定本地媒体流到video标签用于输出
		that.CreateVideo({
			"stream":that.Config.video,
			"username":that.username,
			"audio":that.Config.audio,
			"video":that.Config.video
		})
		that.users[that.username].video.addEventListener('canplay', () => {
			  let stream;
			  const fps = 0;
			  if (that.users[that.username].video.captureStream) {
					that.stream = that.users[that.username].video.captureStream(fps);
					that.InitWebSocket();
			  } else if (that.users[that.username].video.mozCaptureStream) {
					that.tream = that.users[that.username].video.mozCaptureStream(fps);
					that.InitWebSocket();
			  } else {
					console.error('Stream capture is not supported');
					stream = null;
			  };
		});
		return;
	}
	let succ=function(stream) {
		that.stream=stream;
		that.InitWebSocket();
		//绑定本地媒体流到video标签用于输出
		that.CreateVideo({
			"stream":that.stream,
			"username":that.username,
			"audio":that.Config.audio,
			"video":that.Config.video
		})
	};
	let erro= function(error) {
		//处理媒体流创建失败错误
		console.log('getUserMedia error: ' + error);
	};
	that.EnumDevices();
	//TODO handle the exception
	if(that.Config.video=="screen" && that.myBrowser.device=="PC"){
		let mediaconfig=that.InitMediaConfig();
		navigator.mediaDevices.getDisplayMedia(mediaconfig)
		    .then(succ)
			.catch(erro);
		return
	}
	if(that.Config.video=="screen"){
		that.Config.video="before";
	};
	let mediaconfig=that.InitMediaConfig();
	try{
		navigator.mediaDevices.getUserMedia(mediaconfig)
			.then(succ)
			.catch(erro);
	}catch(e){
		//TODO handle the exception
		
		try{
			navigator.getUserMedia(mediaconfig,succ,erro);
			
		}catch(e){
			//TODO handle the exception
			console.log(navigator)
		}
	}
}
myWebRTC.a.prototype.InitMediaConfig=function(){
	let that=this;
	let videoconfig=false;
	let audioconfig=true;
	
	
	if(that.Config.video=="close"){
		videoconfig=false;
	}else{
		videoconfig={};
		if(that.myBrowser.device=="PC"){
			videoconfig=true;
		}else{
			if(that.Config.video=="before"){
				videoconfig["facingMode"]="user";
			};
			if(that.Config.video=="after"){
				videoconfig["facingMode"]="environment";
				videoconfig["width"]={ideal:720};
				videoconfig["height"]={ideal:1280};
			};
			if(that.Config.speed=="low" && that.Config.video=="before"){
				videoconfig["width"]={extra:320};
				videoconfig["height"]={extra:240};
				videoconfig["frameRate"]={ ideal: 10, max: 15 };
			};
		};
	};
	if(that.Config.audio=="close"){
		audioconfig=false
	}
	if(that.Config.audio=="open"){
		audioconfig=true
	}
	return {
		video:videoconfig,
		audio:audioconfig,
	}
}
myWebRTC.a.prototype.AudioControl=function(enable){
	let that=this;
	if(that.Config.audio=="close"){
		if(enable==true){
			try{
				let url=window.location.href;
				url=url.replace(/audio=[^\=]+/,"")
				url=url+"&audio=open"
				window.location.href=url
			}catch(e){
				//TODO handle the exception
				console.log(e)
			}
		}
	}else{
		var tracks = that.stream.getTracks();  //stream为MediaStream
		tracks.forEach(item => {
		    if (item.kind === 'audio') {
				console.log((typeof(enable)=="undefined")?((item.enabled==false)?true:false):enable)
		        item.enabled = (typeof(enable)=="undefined")?((item.enabled==false)?true:false):enable;
		    }
		})
	}
}
myWebRTC.a.prototype.VideoControl=function(enable){
	let that=this;
	if(that.Config.video=="close"){
		if(enable==true){
			try{
				let url=window.location.href;
				url=url.replace(/video=[^\=]+/,"")
				url=url+"&video=before"
				window.location.href=url
			}catch(e){
				//TODO handle the exception
				console.log(e)
			}
		}
	}else{
		var tracks = that.stream.getTracks();  //stream为MediaStream
		tracks.forEach(item => {
		    if (item.kind === 'video') {
		        item.enabled = (typeof(enable)=="undefined")?((item.enabled==false)?true:false):enable;
		    }
		})
	}

	
}
myWebRTC.a.prototype.VideoClose=function(){
	let that=this;
	var tracks = that.stream.getTracks();  //stream为MediaStream
	tracks.forEach(item => {
	    if (item.kind === 'video') {
	        item.enabled = false;
	    }
	})
}
myWebRTC.a.prototype.VideoOpen=function(){
	
	let that=this;
	if(that.Config.video=="close"){
		try{
			let url=window.location.href;
			url=url.replace(/video=[^\=]+/,"")
			url=url+"&video=before"
			window.location.href=url
		}catch(e){
			//TODO handle the exception
			console.log(e)
		}
	}else{
		var tracks = that.stream.getTracks();  //stream为MediaStream
		tracks.forEach(item => {
		    if (item.kind === 'video') {
		        item.enabled = true;
		    }
		})
	}
}
myWebRTC.a.prototype.VideoChange=function(){
	
	let that=this;
	try{
		let url=window.location.href;
		url=url.replace(/video=[^\=]+/,"")
		if(that.Config.video=="before"){
			url=url+"&video=after"
		}else{
			url=url+"&video=before"
		}
		window.location.href=url
	}catch(e){
		//TODO handle the exception
		console.log(e)
	}
}
//对房间内所有人广播消息
myWebRTC.a.prototype.Toall = function(data){
	let that=this;
	that.SendData("toall",JSON.stringify({
		"room":that.room,
		"username":that.username,
		"event": "toall",
		"device":that.myBrowser.device,
		"data": data
	}));
}
//对房间内某个人发送消息
myWebRTC.a.prototype.Touser = function(user,data){
	let that=this;
	that.SendData("toall",JSON.stringify({
		"room":that.room,
		"username":that.username,
		"call":user,
		"event": "touser",
		"device":that.myBrowser.device,
		"data": data
	}));
}
myWebRTC.a.prototype.EnumDevices = function(){
	let that=this;
	try{
		try{
			navigator.mediaDevices.enumerateDevices()
			.then(function(devices) {
				  devices.forEach(function(device) {
						if(device.kind=="audioinput"){
							that.audios[device.deviceId]=device;
						}
						if(device.kind=="videoinput"){
							that.videos[device.deviceId]=device;
						}
				  });
			})
			.catch(function(err) {
				console.log(err.name + ": " + err.message);
			});
		}catch(e){
			//TODO handle the exception
			navigator.enumerateDevices()
			.then(function(devices) {
				  devices.forEach(function(device) {
						if(device.kind=="audioinput"){
							that.audios[device.deviceId]=device;
						}
						if(device.kind=="videoinput"){
							that.videos[device.deviceId]=device;
						}
				  });
			})
			.catch(function(err) {
				console.log(err.name + ": " + err.message);
			});
		}
	}catch(e){
		//TODO handle the exception
	}
}

/*
* 创建一个video对象
* Config json, {username:用户名;stream:视频流;Audio:声音:0静音1有声音,Video}
* 
* 
* ***
*/
myWebRTC.a.prototype.CreateVideo = function(Config) {
	let that=this;
	try{
		if(typeof(that.users[Config.username].div)=="object"){
			$$().removeElem(that.users[Config.username].div);
		}
	}catch(e){
		//TODO handle the exception
	}
	let classname="myWebRTC-div";
	let div=$$().addEle("div",0,{"class":classname,"kind":Config["username"]})
	let video=$$(div).addEle("video",0,{"class":classname+"-video","kind":Config["username"],"autoplay":"autoplay"});

	try{
		if(Config.username==that.Config.username){
			if(that.Config.video.length>10 && Config.username==that.Config.username){
				$$(video).addEle("source",0,{"src":Config.stream,"type":"video/mp4"})
			}else{
				video.srcObject=Config.stream;
			}
			video.setAttribute("muted","true");
		}else{
			video.srcObject=Config.stream;
		}
	}catch(e){
		//TODO handle the exception
		console.log(e);
		
		
		//video.src=Config.stream;
	}
	$$(video).addEvent("dblclick",function(){
		$$().fullScreen(video);
	})
	
	
	let controldiv=$$(div).addEle("div",0,{"class":classname+"-controldiv","kind":Config["username"]});
	let controltable=0;
	if(Config.username==that.username){
		controltable=$$(controldiv).create_table(0,[""],["","","","","","",""]);
		controltable.setAttribute("class",classname+"-me");
	}else{
		controltable=$$(controldiv).create_table(0,[""],["","",""]);
		controltable.setAttribute("class",classname+"-controltable");
	}
	

	controltable.style.width="";
	controltable.setAttribute("kind",Config.username);
	
	//切换摄像头，静音，全员静音，全员关闭摄像头
	controltable.tr[0].td[0].setAttribute("class",classname+"-video_control");
	controltable.tr[0].td[0].setAttribute("switch",that.Config.video);
	
	controltable.tr[0].td[1].setAttribute("class",classname+"-video_change");
	
	controltable.tr[0].td[2].setAttribute("class",classname+"-audio_control");
	controltable.tr[0].td[2].setAttribute("switch",that.Config.audio);
	
	let t1=$$(controltable.tr[0].td[0]).tips(0,"关闭摄像头");
	let t2=$$(controltable.tr[0].td[1]).tips(0,"切换摄像头");
	let t3=$$(controltable.tr[0].td[2]).tips(0,"静音");
	
	if(Config.username==that.username){
		controltable.tr[0].td[3].setAttribute("class",classname+"-all_video_control_open");
		controltable.tr[0].td[4].setAttribute("class",classname+"-all_video_control_close");
		
		
		controltable.tr[0].td[5].setAttribute("class",classname+"-all_audio_control_open");
		controltable.tr[0].td[6].setAttribute("class",classname+"-all_audio_control_close");
		let t4=$$(controltable.tr[0].td[3]).tips(0,"全员开启视频");
		let t5=$$(controltable.tr[0].td[4]).tips(0,"全员关闭视频");
		let t6=$$(controltable.tr[0].td[5]).tips(0,"全员开启声音");
		let t7=$$(controltable.tr[0].td[6]).tips(0,"全员关闭声音");
		
		that.users[Config.username]={"pc":0,"div":div,"video":video,"controldiv":controldiv,"controltable":controltable,"t1":t1,"t2":t2,"t3":t3,"t4":t4,"t5":t5,"t6":t6,"t7":t7};
		
		if(that.Config.admin=="1"){
			$$(controltable.tr[0].td[3]).addEvent("click",function(){
				that.Toall("Video")
			})
			$$(controltable.tr[0].td[4]).addEvent("click",function(){
				that.Toall("NoVideo")
			})
			$$(controltable.tr[0].td[5]).addEvent("click",function(){
				that.Toall("Audio")
			})
			$$(controltable.tr[0].td[6]).addEvent("click",function(){
				that.Toall("NoAudio")
			})
			
		}
		
		
	}else{
		that.users[Config.username].t1=t1;
		that.users[Config.username].t2=t2;
		that.users[Config.username].t3=t3;
		that.users[Config.username].div=div;
		that.users[Config.username].video=video;
		that.users[Config.username].controldiv=controldiv;
		that.users[Config.username].controltable=controltable;
		if(that.Config.admin=="1"){
			$$(controltable.tr[0].td[0]).addEvent("click",function(){
				that.Touser(Config.username,"VideoControl")
			})
			
			if(Config.device=="mobile"){
				$$(controltable.tr[0].td[1]).addEvent("click",function(){
					that.Touser(Config.username,"VideoChange")
				})
				
			}else{
				controltable.tr[0].td[1].style.display="none"
			}
			
			$$(controltable.tr[0].td[2]).addEvent("click",function(){
				that.Touser(Config.username,"AudioControl");
			})

			
		}
		
	}
	if(that.Config.admin=="0"){
		controldiv.style.display="none";
	}
}

