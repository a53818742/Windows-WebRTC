# Windows-WebRTC
这是我打包好的Windows上的webrtc服务器和客户端。 

turn/sturn服务器是对coturn进行windows编译的。

房间服务器是我自己用GO语言写的.

客户端，是我自己用Javascript写的，并且经过android/ipad/PC三端联机测试.

1.我需要做什么？

  a.turn/sturn服务器是需要采用https证书，因此，您需要自己申请一个https证书，然后放在cert目录下，名称分别为cert.pem和key.pem，房间服务器和turn/sturn服务器同样采用这里的https证书。
  
  b.客户端是webrtc-html-client目录，您需要将这个目录拷贝到自己的https网站下面，然后将test.html里面的websocket链接地址指向房间服务器的链接地址。

2. text.html的各项参数。

  
  
 
