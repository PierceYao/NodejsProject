// 在一个自定义模块中，默认情况下，module.exports = {};module.exports可用exports来替换
// 向 module.exports 对象上挂载 useIname 属性
module.exports.username = 'zs';

module.exports.sayHello = () => {
    console.log('hello!');
}

exports.sex = 'male';

const age = 20;

module.exports = {
    nickname: '小黄',
    sayHi: () => {
        console.log('Hi!');
    }
}