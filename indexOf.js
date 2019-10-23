/**
 * 找出元素 item 在给定数组 arr 中的位置
 * @param {Object} arr 
 * @param {Number} item 
 */
function indexOf(arr, item) {
    return arr.indexOf(item);
}

function indexOf(arr, item) {
    for(let i = 0 , len = arr.length ; i < len ; i ++) {
        if(arr[i] == item) return i;
    }
    return -1;
}