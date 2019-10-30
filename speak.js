/**
 * 将函数 fn 的执行上下文改为 obj 对象      
 * @param {Function} fn 
 * @param {Object} obj 
 */
function speak(fn, obj) {
    return fn.call(obj);
}