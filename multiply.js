function multiply(a, b) {
    let stra = a.toString().split('.')[1] || '';
    let strb = b.toString().split('.')[1] || '';
    let fix  = stra.length + strb.length;
    return (a * b).toFixed(fix);
}