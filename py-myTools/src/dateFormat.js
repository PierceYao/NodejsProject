//定义格式化时间的函数
function dateFormat(dateStr) {
    var time = new Date(dateStr);

    var year = zeroFill(time.getFullYear());
    var month = zeroFill(time.getMonth());
    var date = zeroFill(time.getDate());

    var hour = zeroFill(time.getHours());
    var minute = zeroFill(time.getMinutes());
    var second = zeroFill(time.getSeconds());

    return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
}

//补零函数
function zeroFill(n) {
    return n < 9 ? `0${n}` : n;
}

//向外暴露需要的成员
module.exports = {
    dateFormat
}