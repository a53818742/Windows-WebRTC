# Windows-WebRTC
这是我打包好的Windows上的webrtc服务器和客户端。 

turn/sturn服务器是对coturn进行windows编译的。

房间服务器是我自己用GO语言写的.

客户端，是我自己用Javascript写的，并且经过android/ipad/PC三端联机测试.

1.我需要做什么？

  a.turn/sturn服务器是需要采用https证书，因此，您需要自己申请一个https证书，然后放在cert目录下，名称分别为cert.pem和key.pem，房间服务器、turn/sturn服务器、web服务器同样采用这里的https证书。
  
  b.web服务器采用nginx，已经配置好https环境，您只需要在conf/nginx.conf中修改端口号即可。
  
  c.webrtc网页的代码在html目录中。

2. index.html的各项参数。参考阅读我.doc
	

  
  
 
