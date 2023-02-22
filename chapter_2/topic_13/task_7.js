const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

let n;
readline.question(`Enter the num: `, num => {
	n = Number(num);
	for(let i = 2; i <= n; i++) {
		let isSkip = false;
		for(let j = 2; j < i; j++) {
			if(i % j == 0) {
				isSkip = true
				break
			}
		}
		if(isSkip === false) {
			console.log(i)
		}
	}
	readline.close();
});

