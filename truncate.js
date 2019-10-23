/**
 * 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
 * @param {Array} arr 
 */
function truncate(arr) {
    let res = arr.slice();
    res.pop();
    return res;
}