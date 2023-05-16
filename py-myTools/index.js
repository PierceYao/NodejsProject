//包的入口文件

var date = require('./src/dateFormat');
var escape = require('./src/htmlEscape');

//向外暴露需要的成员
module.exports = {
    ...date,
    ...escape
}