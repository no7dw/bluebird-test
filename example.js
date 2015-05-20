var fs = require('fs')
var Promise = require('bluebird')
//改造fs.readFile为Promise版本
var readFileAsync = function(path){
    //返回一个Promise对象，初始状态pending
    return new Promise(function(fulfill, reject){
    fs.readFile(path,  'utf8', function(err, content){
        //由pending状态进入rejected状态
        if(err)return reject(err)
        //由pending状态进入fulfilled状态
        return fulfill(content)
    })
})
}
//开始使用，调用其then方法，回调接受执行成功的返回值
readFileAsync('./promise-1.js').then(function(content){
console.log(content)
})