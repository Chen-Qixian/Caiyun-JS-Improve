/**
 * 制造闭包，使用立即执行函数
 * @param {Array} arr 
 * @param {Fucntion} fn 
 */
function makeClosures(arr, fn) {
    let result = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        (function (i) {
            result.push(function () { return fn(arr[i]) });
        })(i)
    }
    return result;
}

/**
 * 制造闭包，使用let
 * @param {Array} arr 
 * @param {Fucntion} fn 
 */
function makeClosures(arr, fn) {
    let result = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        result.push(function () { return fn(arr[i]) })
    }
    return result;
}