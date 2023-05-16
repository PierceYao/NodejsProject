//注意: 在使用 require 加载用户自定义模块期间可以省略 .js 的后缀名
//在外界使用 require 导入一个自定义模块的时候，得到的成员就是 那个模块中，通过 module.exports 指向的那个对象
var clock = require('./006_时钟案例/009_时钟web服务器案例');
console.log(clock);