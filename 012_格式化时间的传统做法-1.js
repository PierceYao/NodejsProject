//创建格式化时间的函数
function dateFormat(dtStr) {
    const dt = new Date(dtStr);

    const year = dt.getFullYear();
    const month = padZero(dt.getMonth());
    const day = padZero(dt.getDate());

    const hour = padZero(dt.getHours());
    const minute = padZero(dt.getMinutes());
    const second = padZero(dt.getSeconds());

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

//创建补零函数
function padZero(n) {
    return n > 9 ? n : `0${n}`;
}

//到处将格式时间的函数
module.exports = {
    dateFormat
}