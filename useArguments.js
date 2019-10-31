/**
 * 返回参数和
 */
function useArguments() {
    let args = [].slice.call(arguments);
    return args.reduce(function(prev, cur) {
        return prev + cur;
    })
}