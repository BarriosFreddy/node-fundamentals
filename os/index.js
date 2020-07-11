const os = require('os');

console.log(os.platform());
console.log(os.freemem());
console.log('hostname', os.hostname());
console.log(os.type());
//console.log(os.constants);
console.log(os.homedir());
console.log('tmpdir', os.tmpdir());
console.log('networkInterfaces', os.networkInterfaces());

//console.log(os.cpus());
