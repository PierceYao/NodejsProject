//1.导入express
const express = require('express');

//2.创建web服务器
const app = express();

//3.调用app.listen(端口号,启动成功后的回调函数)，启动服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})

//4.监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
//通过app.get()方法，可以监听客户端的GET请求
app.get('/user', (req, res) => {
    //调用express提供的res.send()方法，向客户端响应一个JSON对象
    res.send({name: 'zs', age: 25, gender: 'female'});
    console.log(req.query);
})

//通过app.post()方法，可以监听客户端的POST请求
app.post('/user', (req, res) => {
    //调用express提供的res.send()方法，向客户端响应一个文本字符串
    res.send('请求成功！');
})

//6.获取URL中携带的查询参数
app.get('/', (req, res) => {
    //req.query 默认是一个空对象
    //客户端使用 ?name=zs&age=20 这种查询字符串形式，发送到服务器的参数可以通过 req.query 对象访问到，例如:req.query .name   req.query .age
    console.log(req.query);
    res.send(req.query);
})

//7.获取URL中的动态参数
//URL 地址中，可以通过 :参数名 的形式，匹配动态参数值
app.get('/user/:id/:name', (req, res) => {
    //req.params 默认是一个空对象
    //里面存放着通过 : 动态匹配到的参数值
    console.log(req.params);
    res.send(req.params);
})
