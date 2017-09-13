var osInfo = require('./osInfo');

process.stdin.setEncoding('utf-8');

//osUptime.print();

//osUptime();

function timer() {
    //var release = os.release();
    //var uptime = os.uptime();
    //console.log('Uptime: ~ ' + uptime.toFixed(0) + ' sek.');
    //console.log(uptime.toFixed(0));

    var time = (uptime.toFixed(0)),
        restOfMin,
        restOfSec;

    restOfMin = time % 3600;
    var hour = parseInt(time / 3600);
//console.log(hour + ' godz.');
    var min = parseInt(restOfMin / 60);
//console.log(min + ' min.');
    restOfSec = (time % 60).toFixed();

    console.log('Czas to: ' + hour + ' godz., ' + min + ' min. i ' + restOfSec + ' sek.');
}

timer();

exports.print = timer;