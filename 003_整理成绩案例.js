const fs = require('fs');

fs.readFile('files/score.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log('文件读入失败！' + err.message);
    }
    var scores = data.replace(/=/g, ':');
    var arrOld = scores.split(' ');
    var arrNew = arrOld.join('\r\n');
    fs.writeFile('files/score-ok.txt', arrNew, 'utf-8', function (err) {
        if (err) {
            console.log('文件写入失败！' + err.message);
        }
        console.log('文件写入成功！');
    });
})

