// It's not necessary import process module due It's in the global Object 
// const process = require('process');

process.on('uncaughtException', (error, origin) => {
	console.log(`We have forgot to catch an error which is 
	${error} 
	from ${origin}`);
});

process.on('beforeExit', () => {
	console.log('The process is about over');
});

process.on('exit', () => {
	console.log('The process is over');
	setTimeout(() => {
		console.log('We will never see this, due the process is not in the even loop');
	}, 0);
});


unname();
