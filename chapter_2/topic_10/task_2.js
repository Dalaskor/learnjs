const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('Какое «официальное» название JavaScript? ', nameJS => {
	if(nameJS === 'ECMAScript') {
		console.log('Верно!')
	} else {
		console.log('Не знаете? ECMAScript!')
	}
	readline.close();
});
