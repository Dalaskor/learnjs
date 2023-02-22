const sumInput = () => {
	let arr = [];
	let sum = 0;

	while (true) {
		let num = prompt("Enter the number ", 0);
		if (num === '' || num === null || !isFinite(num)) {
			break
		}
		num = Number(num)
		arr.push(num)
	}

	for (let item of arr) {
		sum += item;
	}

	return sum
}
