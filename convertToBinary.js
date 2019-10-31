/**
 * 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
 * @param {Number} num 
 */
function convertToBinary(num) {
    let res = num.toString(2);
    while(res.length < 8) {
        res = '0' + res;
    }
    return res;
}