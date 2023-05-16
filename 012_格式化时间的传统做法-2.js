const TIME = require('./012_格式化时间的传统做法-1');
const dt = new Date();

//调用格式化时间的函数
const newDT = TIME.dateFormat(dt);
console.log(newDT);