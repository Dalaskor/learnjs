const pow = (x, n) => {
	let result = x;
	for (let i = 0; i < n; i++) {
		x *= n;
	}
	return x;
}
