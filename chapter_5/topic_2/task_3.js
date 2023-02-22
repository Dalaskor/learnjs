const readNumber = () => {
	while (true) {
		let num = prompt('Enter the number', 0)
		if (num === '' || num === null) {
			return null;
		}
		if (isFinite(num)) {
			return num
		}
	}
}
