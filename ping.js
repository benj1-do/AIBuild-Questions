import { spawn } from 'node:child_process'; // integrated into node
import * as readline from 'node:readline/promises'; // allows us to read user input
import { stdin as input, stdout as output } from 'node:process';
function ping_test(website) { // this was done on Windows
    const ping = spawn("ping", ["-n", "1", `${website}`]); // spawns shell environment and runs the ping
    let raw_data = "";
    
    ping.stdout.on("data", (data) => { // grabs the raw output of the data
        
        raw_data += data.toString(); // this will update it live as new data is added
        
    });

    ping.stderr.on("data", (data) => { // checks for errors and outputs to console
        console.error("STDERR: ", data.toString());
    });

    ping.on("close", (code) => { // closes spawned instance
        let ping_data;
        ping_data = raw_data.match(/time[=<]\s*([\d.]+)ms/i); // regex to convert raw data to just the ping number
        if (ping_data) { // catches null values
            // console.log("STDOUT: ", `${ping_data[1]} ms`); debug code
            if (ping_data[1] < 500) { // everything is in ms
                console.log('good');
            } else if (ping_data[1] < 5000) {
                console.log('fine');
            } else {
                console.log('terrible');
            }
            
            // outputs ping after the ping command loads everything
        } else { // if it is null, we are not recieving any numerical response from the ping command
            console.error('terrible'); // no response, so return 'terrible'
        }
        
        // console.log(`Ping process exited with code ${code}`); // lets us know it's closed
    });
    
}

// main function

const rl = readline.createInterface({ input, output });
const user_site = await rl.question('Please type in a website. Ex: \"google.com\"\n');
// var user_site = prompt("Please input a domain");

try { // main loop
    ping_test(user_site);
} catch (err) {
    console.error(err);
}

rl.close();