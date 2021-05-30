// var url = 'http://mylogger';
// function log() {
//   // send
//   console.log();
// }

// module.exports.log = log;

// const path = require('path');
// const pathobj = path.parse(__filename);
// console.log(pathobj);

// const os = require('os');

// const totoal = os.totalmem();
// const free = os.freemem();
// console.log(totoal, free);

// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

const EventEmmitter = require('events');
const emitter = new EventEmmitter();
// register
emitter.on('messageLogged', function (arg) {
  console.log('called', arg);
});
emitter.emit('messageLogged', { id: 1, url: 'url' });
// making a noise
