/**
 * 统计数组 arr 中值等于 item 的元素出现的次数
 * @param {Array} arr 
 * @param {Number} item 
 */
function count(arr, item) {
    let res = 0;
    for(let i = 0, len = arr.length ; i < len ; i ++) {
        if(arr[i] == item) {
            res ++;
        }
    }
    return res;
}