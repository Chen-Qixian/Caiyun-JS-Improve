/**
 * 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组
 * @param {Array} arr 
 */
function curtail(arr) {
    let res = arr.slice();
    res.shift();
    return res;
}