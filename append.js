/**
 * 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
 * @param {Array} arr 
 * @param {Number} item 
 */
function append(arr, item) {
    let res = arr.slice();
    res.push(item);
    return res;
}