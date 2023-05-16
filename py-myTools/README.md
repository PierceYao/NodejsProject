## 安装
```
npm install py-mtTools
```

## 导入
```js
const myTools = require('py-myTools');
```

## 格式化时间的功能
```js
//调用dateFormat对时间进行格式化
var dateStr = myTools.dateFormat(new Date());
//结果 2023-04-07 16:20:39
console.log(dateStr);
```

## 转义HTML的特殊字符功能
```js
//调用htmlEscape对特殊字符进行转换
var htmlEscape = myTools.htmlEscape('<h5>这是内容</h5>');
//结果 &lt;h5&gt;这是内容&lt;/h5&gt;
console.log(htmlEscape);
```

## 还原HTML的功能
```js
//调用htmlRevert对转换后的特殊字符进行还原
var htmlRevert = myTools.htmlRevert(htmlEscape);
//结果 <h5>这是内容</h5>
console.log(htmlRevert);
```

## 开源协议
```
ISC
```