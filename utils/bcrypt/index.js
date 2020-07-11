const bcrypt = require('bcrypt');

const password = 'SafePassword';

bcrypt.hash(password, 5, (error, hash) => {
	console.log(hash);
	bcrypt.compare(password, hash, (error, result) => {
		console.log(result);
	});
});