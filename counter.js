function count(start, end) {
    let timer;
    console.log(start ++);
    timer = setInterval(function() {
        if(start <= end) {
            console.log(start ++);
        }
        else {
            clearInterval(timer);
        }
    }, 100)
    return {
        cancel: function() {
            clearInterval(timer);
        }
    }
}