//导入http模块
const http = require('http');

//创建web服务器实例
const server = http.createServer();

//使用服务器实例的on()方法，为服务器绑定一个request事件
server.on('request', (req, res) => {
    console.log('Someone visit our web server.');//只要有客户端来请求我们自己的服务器，就会触发 request 事件，从而调用这个事件处理函数
})

//启动服务器，调用 server.listen(端口号，cb回调) 方法，即可启动 web 服务器
server.listen(80, '127.0.0.1',() => {
    console.log('http server running at http://127.0.0.1');
})
