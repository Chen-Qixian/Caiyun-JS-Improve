/**
 * 给定字符串 str，检查其是否包含 连续3个数字
    1、如果包含，返回最新出现的 3 个数字的字符串
    2、如果不包含，返回 false
    [注意]是 连续的 3个数字！
 * @param {String} str 
 */
function captureThreeNumbers(str) {
    let reg = /[0-9]{3}/;
    if(reg.test(str)) {
        return str.match(reg)[0];
    }
    else {
        return false;
    }
}