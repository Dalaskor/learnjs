const filterRangeInPlace = (arr, a, b) => {
	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];

		if (num > b || num < a) {
			arr.splice(i, 1);
			i--;
		}
	}
}
