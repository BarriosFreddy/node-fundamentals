const { exec, spawn } = require('child_process');

/*exec('dir', (error, stdout, stderr) => {
	if (error) {
		console.error(error);
		return false;
	}
	console.log(stdout);
});*/

let process = spawn('dir');
process.stdout.on('data', data => {
	console.log(data);
})
// console.log(process);

