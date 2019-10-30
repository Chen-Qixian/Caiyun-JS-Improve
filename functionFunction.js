/**
 * 拼接
 * @param {String} str 
 */
function functionFunction(str) {
    return function(newStr) {
        return `${str}, ${newStr}`;
    }
}