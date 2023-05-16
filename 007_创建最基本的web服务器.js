const http = require('http');
var server = http.createServer();
server.on('request', (req, res) => {
    //req 是请求对象，包含了与客户端相关的数据和属性。req.ur1 是客户端请求的 URL 地址；req.method 是客户端请求的 method 类型
    const url = req.url;
    const method = req.method;
    const str = `请求的URL地址是${url}, 请求方法是${method}`;
    // const str = `Your request url is ${url}, and request method is ${method}`;
    console.log(str);

    //为了防止中文显示乱码的问题，需要设置响应头 Content-Type 的值为 text/html; charset=utf-8
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    //调用 res.end() 方法，向客户端响应一些内容
    res.end(str);
})
server.listen(80, '127.0.0.1', () => {
    console.log('http server running at http://127.0.0.1');
})