var fs = require('fs');
var Promise = require("bluebird");
Promise.promisifyAll(fs);
//fs.readFile ==> fs.readFile + 'Async'
fs.readFileAsync('README.json').then(JSON.parse).then(function(val){
	console.log(val.success);
})
.catch(SyntaxError, function(e){
	console.error('invalid json in file');
})
.catch(function(e){
	console.error('unable to read file');
});
