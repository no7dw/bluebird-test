function delay(data){
    // 创建一个子事务
    var promise = new Promise();
    setTimeout(function(){
        console.log('in setTimeout', data);
        // 一秒之后才启动子事务，模拟异步延时
        promise.resolve();
    }, 1000);
    return promise;
}
// 主事务
var promise = new Promise(function(data){
    console.log('data',data);
    return "end";
});
promise.then(delay);
console.log('www',promise);
promise.resolve("start");