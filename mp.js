var async = require('async');
var needle = require('needle');
var URLs = ['www.baidu.com','www.126.com'];
var processAndSaveAllInDB = function(data, cb){
    cb(null);
};
var Promise = require("bluebird");
Promise.promisifyAll(needle);
var options = {};
var current = Promise.resolve();
Promise.map(URLs, function(URL){
    current = current.then(function(){
        return needle.getAsync(URL, options);
    });
    return current;
}).map(function(responseAndBody){
    console.log('json parse error');
    return JSON.parse(responseAndBody[1]);
}).then(function(results){
    return processAndSaveAllInDB(result);
}).then(function(err){
    console.log("all data saved to db");
}).catch(function(e){
    console.log(e);
});
