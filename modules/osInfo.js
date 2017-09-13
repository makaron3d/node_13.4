var os = require('os');

process.stdin.setEncoding('utf-8');

function osUptime() {
    //var release = os.release();
    var uptime = os.uptime();
    //var updateTime = uptime.toFixed(0);
    //console.log('Uptime: ~ ' + uptime.toFixed(0) + ' sek.');
    //console.log(uptime.toFixed(0));
    console.log(uptime);
    //return uptime;
}

//osUptime();

//exports.print = osUptime;
module.exports = osUptime();