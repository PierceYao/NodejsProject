const path = require('path');

const pathStr1 = path.join('/a', '/b/c', '../', './d', 'e');//../会抵消一层路径
console.log(pathStr1);//输出\a\b\d\e

const pathStr2 = path.join(__dirname, './files/score.txt');
console.log(pathStr2);//输出D:\JetBrains\WebstormProjects\Nodejs\files\score.txt


const fs = require('fs');

fs.readFile(path.join(__dirname, '/files/characters.txt'), 'utf-8', function (err, data) {
    if (err) {
        return console.log(`文件读取失败！${err.message}`);//如果读取成功，err的值为null；读取失败，值为错误对象
    }
    console.log(data); //如果读取成功，打印成功的结果；读取失败，值为undefined
});

//获取路径中的文件名
const fpath = '/a/b/c/index.html';

var fullName = path.basename(fpath);
console.log(fullName);

var nameWithoutExt = path.basename(fpath, '.html');
console.log(nameWithoutExt);

//获取路径中的扩展名部分
var extName = path.extname(fpath);
console.log(extName);