var myTools = require('./py-myTools/index');

var dateStr = myTools.dateFormat(new Date());
console.log(dateStr);

var htmlEscape = myTools.htmlEscape('<h5>这是内容</h5>');
console.log(htmlEscape);

var htmlRevert = myTools.htmlRevert(htmlEscape);
console.log(htmlRevert);