/**
 * 找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
    1、返回数组，格式为 key: value
    2、结果数组不要求顺序
 * @param {Object} obj 
 */
function iterate(obj) {
    let res = [];
    for(prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            res.push(`${prop}: ${obj[prop]}`);
        }
    }
    return res;
}

/**
 * 法二: Object.keys()只收集实例自身属性名，不继承原型链上属性
 */
function iterate(obj) {
    let arr = Object.keys(obj);
    let res = [];
    arr.forEach((item) => {
        res.push(`${item}: ${obj[item]}`);
    })
    return res;
}