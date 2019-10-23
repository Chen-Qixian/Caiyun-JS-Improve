/**
 * 找出数组 arr 中重复出现过的元素
 * @param {Array} arr 
 */
function duplicates(arr) {
    let obj = {};
    let res = [];
    for(item of arr) {
        if(!obj.hasOwnProperty(item)) {
            obj[item] = 0;
        }
        obj[item] ++;
    }
    for(prop in obj) {
        if(obj[prop] > 1) {
            res.push(+prop);
        }
    }
    return res;
}