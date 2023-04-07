const fs = require('fs');

fs.readFile(`${__dirname}/files/characters.txt`, 'utf-8', function (err, data) {
    if (err) {
        return console.log(`文件读取失败！${err.message}`);//如果读取成功，err的值为null；读取失败，值为错误对象
    }
    console.log(data); //如果读取成功，打印成功的结果；读取失败，值为undefined
});
