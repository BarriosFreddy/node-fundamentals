function asyncFunction(callback) {
	setTimeout(() => {
		try {
			let result = 7 + z;
			callback(null, result)
		} catch (error) {
			callback(error, null);
		}

	}, 100);
}

asyncFunction((err, dato) => {
	if (err) {
		/* 		console.error(err);
				return false; */
		throw err; //does not work within callback. due to error is not catch
	}

	console.log('Everything is ok');
});