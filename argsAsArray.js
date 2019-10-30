/**
 * 将数组 arr 中的元素作为调用函数 fn 的参数
 * @param {Function} fn 
 * @param {Array} arr 
 */
function argsAsArray(fn, arr) {
    let _this = this;
    let args = arr.slice();
    return fn.apply(_this, args);
}