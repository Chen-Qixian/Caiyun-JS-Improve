/**
 *  将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值
 * @param {Function} fn 
 * @param {Object} obj 
 */
function alterContext(fn, obj) {
    return fn.call(obj);
}