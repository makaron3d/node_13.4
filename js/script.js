var osInfo = require('../modules/osInfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/osUptime':
                osUptime.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});