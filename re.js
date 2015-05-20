var Promise = require('bluebird');
var retry = require('bluebird-retry');

function promiseSuccess() {
    return Promise.resolve();
};

var count = 0;
function myfunc() {
    console.log('myfunc called ' + (++count) + ' times');
    if (count < 3) {
        throw new Error('i fail the first two times');
    } else {
        return promiseSuccess('i succeed the third time');
    }
}

retry(myfunc)
    .done(function(result) { console.log(result); } );
