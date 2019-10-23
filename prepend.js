/**
 * 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
 * @param {Array} arr 
 * @param {Number} item 
 */
function prepend(arr, item) {
    let res = arr.slice();
    res.unshift(item);
    return res;
}