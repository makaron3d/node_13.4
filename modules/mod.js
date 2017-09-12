var os = require('os');

process.stdin.setEncoding('utf-8');

function osInfo() {
    //var release = os.release();
    var uptime = os.uptime();
    console.log('Uptime: ~ ' + uptime.toFixed(0) + ' sek.');
    //console.log(uptime.toFixed(0));
    
    var time = uptime,
        foo1,
        foo2;

    foo1 = time % 3600;
    var hour = parseInt(time / 3600);
//console.log(hour + ' godz.');
    var min = parseInt(foo1 / 60);
//console.log(min + ' min.');
    foo2 = (time % 60).toFixed();

    console.log('Czas to: ' + hour + ' godz., ' + min + ' min. i ' + foo2 + ' sek.');
}


osInfo();

exports.print = osInfo;