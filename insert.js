/**
 * 
 * @param {Array} arr 
 * @param {String} item 
 * @param {Number} index 
 */
function insert(arr, item, index) {
    let res = arr.slice();
    res.splice(index, 0, item);
    return res;
}