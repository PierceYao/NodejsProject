const fs = require('fs');

fs.readFile('files/characters.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log(`文件读取失败！${err.message}`);//如果读取成功，err的值为null；读取失败，值为错误对象
    }
    console.log(dataStr); //如果读取成功，打印成功的结果；读取失败，值为undefined
});

fs.writeFile('files/helloNode.txt', 'hello node.js!', 'utf-8', function (err) {
    if (err) {
        return console.log(`文件写入失败！${err.message}`);//如果写入成功，err的值为null；写入失败，值为错误对象
    }
    console.log('文件写入成功！');
});