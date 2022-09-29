//OS MODULE
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);

//metho returns the sysjtem uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds, ${os.uptime() / 60} minutes`)

const currentOS = {         //using MAP
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);