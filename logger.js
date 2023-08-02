// const EventEmitter = require('events');


// var url = 'http://mylogger.io';

// class Logger extends EventEmitter {
//     log(message){
//     //Send HTTP request
//     console.log(message);

//     this.emit('message Logged', {id: 1, url: 'http'});
// }
// }


// module.exports =  Logger;

module.exports.add = function(a,b){ return a + b }

module.exports.multiply = function(a,b){ return a * b }
