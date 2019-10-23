/**
 * 求和
 * @param {Array} arr 
 */
function sum(arr) {
    return arr.reduce(function(prev, next) {
        return prev + next;
    })
}

function sum(arr) {
    let res = 0;
    arr.forEach(element => {
        res += element; 
    });
    return res;
}