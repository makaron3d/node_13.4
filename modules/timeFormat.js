//var timeFormat = require('./osInfo');

process.stdin.setEncoding('utf-8');

function timer() {

    var time = (uptime.toFixed(0)),
        restOfMin,
        restOfSec;

    restOfMin = time % 3600;
    var hour = parseInt(time / 3600);
//console.log(hour + ' godz.');
    var min = parseInt(restOfMin / 60);
//console.log(min + ' min.');
    restOfSec = (time % 60).toFixed();

    return 'Czas to: ' + hour + ' godz., ' + min + ' min. i ' + restOfSec + ' sek.';
}


exports.print = timer;