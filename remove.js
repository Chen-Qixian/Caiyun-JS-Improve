/**
 * 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
 * @param {Array} arr 
 * @param {Number} item 
 */
function remove(arr, item) {
    let res = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] !== item) {
            res.push(arr[i]);
        }
    }
    return res;
}

function remove(arr, item) {
    return arr.filter(function (cur) {
        return cur !== item;
    })
}

/**
 * 移除数组 arr 中的所有值与 item 相等的元素。直接修改数组 arr，结果返回新的数组
 * @param {Array} arr 
 * @param {Number} item 
 */
function removeWithoutCopy(arr, item) {
    for(let i = 0 ; i < arr.length ; i ++) {
        if(arr[i] === item) {
            arr.splice(i,1);
            i --;
        }
    }
    return arr;
}