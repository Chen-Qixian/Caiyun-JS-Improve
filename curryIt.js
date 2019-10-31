function curryIt(fn) {
    // Function.length 可以获取函数参数数量
    let n = fn.length;
    // 存放已传入参数
    let args = [];
    // 柯里化函数返回为一个匿名函数
    return function(arg) {
        // 每次返回都会获取一个参数，取得参数长度
        args.push(arg);
        if(args.length < n) {
            // 返回当前匿名函数
            return arguments.callee;
        }
        else {
            return fn.apply("", args);
        }
    }
}