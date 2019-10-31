/**
 * 给定一个构造函数 constructor，请完成 alterObjects 方法，将 constructor 的所有实例的 greeting 属性指向给定的 greeting 变量。
 * 原型链问题，在实例对象上未找到属性，则会延原型链寻找该属性，直到找到为止
 * @param {Function} constructor 
 * @param {*} greeting 
 */
function alterObjects(constructor, greeting) {
    constructor.prototype.greeting = greeting;
}