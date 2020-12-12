/*
WEBRTC 房间服务器

1. 这是一个websocket服务器
*/

package main

import (
	"./dbDrive"
)

func main() {
	c := new(dbDrive.WebSocketServer)
	c.Init()
	c.Run()
}
