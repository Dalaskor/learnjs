const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('Enter the number: ', num => {
	if(num > 0) {
		console.log(1)
	} else if(num < 0) {
		console.log(-1)
	} else {
		console.log(0)
	}
	readline.close();
});
