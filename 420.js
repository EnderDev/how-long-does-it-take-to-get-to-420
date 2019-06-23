const logUpdate = require('log-update');

var tries = 0;

const frames = ['-', '\\', '|', '/'];
let i = 0;

console.log('');

logUpdate(`${frames[0]}`);

const interval = setInterval(() => {
  const frame = frames[(i = ++i % frames.length)];

  logUpdate(`${frame}`);
}, 80);

var fourtwentymachine = setInterval(function () {

    ++tries
    if(Math.floor(Math.random() * 420) + 1 == 420) {
        clearInterval(fourtwentymachine)
        clearInterval(interval)
        console.log('');
        return console.log(`It took ${tries} tries to get 420.`)
    }

}, 1);