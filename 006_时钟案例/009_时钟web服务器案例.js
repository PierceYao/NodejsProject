const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();
server.on('request', (req, res) => {
    //req 是请求对象，包含了与客户端相关的数据和属性。req.ur1 是客户端请求的 URL 地址；req.method 是客户端请求的 method 类型
    const url = req.url;

    //把 请求的 ur1 地址，映射为本地文件的存放路径
    let fpath = '';
    if (url === '/') {
        fpath = path.join(__dirname, 'clock/index.html');
    } else {
        fpath = path.join(__dirname, `clock/${url}`);
    }

    fs.readFile(fpath, 'utf-8', (err, data) => {
        if (err) {
            return res.end('404 Not found!');
        }

        res.end(data);
    })
})
server.listen(80, '127.0.0.1', () => {
    console.log('http server running at http://127.0.0.1');
})