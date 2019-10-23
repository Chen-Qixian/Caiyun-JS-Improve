/**
 * 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
 * @param {Array} arr 
 * @param {Number} target 
 */
function findAllOccurrences(arr, target) {
    let res = [],
        start = 0,
        cur = 0;
    while((cur = arr.indexOf(target, start)) != -1) {
        res.push(cur);
        start = cur + 1;
    }
    return res;
}