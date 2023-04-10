const fs = require('fs');
const path = require('path');

const styleReg = /<style>[\s\S]*<\/style>/;
const scriptReg = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, 'files/index.html'), 'utf-8', function (err, data) {
    if (err) {
        console.log(`文件读取失败！${err.message}`);
    }

    resolveCss(data);
    resolveJS(data);
    resolveHTML(data);
})

function resolveCss(data) {
    const style = data.match(styleReg);
    const CSS = style[0].replace('<style>', '').replace('</style>', '');
    fs.writeFile(`${__dirname}/clock/index.css`, CSS, 'utf-8', function (err) {
        if (err) {
            return console.log(`CSS文件写入失败！${err.message}`);//如果写入成功，err的值为null；写入失败，值为错误对象
        }
        console.log('CSS文件写入成功！');
    });
}

function resolveJS(data) {
    const script = data.match(scriptReg);
    const JS = script[0].replace('<script>', '').replace('</script>', '');
    fs.writeFile(`${__dirname}/clock/index.js`, JS, 'utf-8', function (err) {
        if (err) {
            return console.log(`JS文件写入失败！${err.message}`);//如果写入成功，err的值为null；写入失败，值为错误对象
        }
        console.log('JS文件写入成功！');
    });
}

function resolveHTML(data) {
    const HTML = data.replace(styleReg, '<link rel="stylesheet" href="./index.css">').replace(scriptReg, '<script src="./index.js"></script>');
    fs.writeFile(`${__dirname}/clock/index.html`, HTML, 'utf-8', function (err) {
        if (err) {
            return console.log(`HTML文件写入失败！${err.message}`);//如果写入成功，err的值为null；写入失败，值为错误对象
        }
        console.log('HTML文件写入成功！');
    });
}