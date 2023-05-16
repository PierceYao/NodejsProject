const http = require('http');
var server = http.createServer();
server.on('request', (req, res) => {
    //req 是请求对象，包含了与客户端相关的数据和属性。req.ur1 是客户端请求的 URL 地址；req.method 是客户端请求的 method 类型
    const url = req.url;
    //设置默认的响应内容为 404 Not found
    let content = '<h1>404 Not found!</h1>';
    if (url === '/' || url === '/index.html') {//判断用户请求的是否为 / 或 /index.html 首页
        content = '<h1>首页</h1>';
    } else if (url === '/about.html') {//判断用户请求的是否为 /about.htm1 关于页面
        content = '<h1>关于页面</h1>';
    }

    //为了防止中文显示乱码的问题，需要设置响应头 Content-Type 的值为 text/html; charset=utf-8
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    //调用 res.end() 方法，向客户端响应一些内容
    res.end(content);
})
server.listen(80, '127.0.0.1', () => {
    console.log('http server running at http://127.0.0.1');
})