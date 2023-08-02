// const path = require('path');

// const currentID = process.pid;

// const currentWD = process.cwd;

// const seperator = path.sep;

// console.log("Process PID:", currentID);

// console.log(currentWD);
// console.log(seperator);

// const os = require('os');

// const userInfo = os.userInfo();
// const totalmem = os.totalmem()
// const freemem = os.freemem()

// console.log("Username", userInfo.username);
// console.log(`Total Memory: ${totalmem}`);

// console.log(`Free memory ${freemem}`)


// const fs = require('fs');

// fs.readdir('./', (err, result) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Result: ' + result);
//     }
// });


const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('message Logged', (e) => {
    console.log("Listener Called", e);
})

logger.log('message');

