import {exec} from 'node:child_process';
function ping_test(website) {
    exec(`ping ${website}`, (err, stdout, stderr) => {
        if (error) {
            console.error(`Error! Msg: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`Ping error! Msg: ${stderr}`);
            return;
        }
        console.log(`Ping: ${stdout}`);
    });
}

console.log('hello');
ping_test('google.com')
