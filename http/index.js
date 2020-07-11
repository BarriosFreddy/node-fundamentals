const http = require('http');

const server = http.createServer((request, response) => {
	if (request.url === '/api') {
		response.write('Welcome to my API');
		response.end();
	} else {
		response.write('Not found! 404');
		response.end()
	}
});

server.listen(3000);
console.log('Listen to 3000 port');
