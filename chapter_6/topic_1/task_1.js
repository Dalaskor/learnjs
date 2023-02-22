const sumTo1 = (n = 0) => {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
};

console.log(sumTo1(60));

const sumTo2 = (n = 0) => {
    if (n === 1) {
        return 1;
    }
    return (n + sumTo2(n - 1));
};

console.log(sumTo2(60));

const sumTo3 = (n = 0) => {
    let result = n * (n + 1) / 2;
    return result;
}

console.log(sumTo3(60));
