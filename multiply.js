/**
 * 求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
 * @param {Number} a 
 * @param {Number} b 
 */
function multiply(a, b) {
    let stra = a.toString().split('.')[1] || '';
    let strb = b.toString().split('.')[1] || '';
    let fix  = stra.length + strb.length;
    return (a * b).toFixed(fix);
}