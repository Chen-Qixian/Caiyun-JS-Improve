/**
 * 给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
 * @param {String} str 
 */
function containsNumber(str) {
    let reg = /[0-9]/;
    return reg.test(str);
}