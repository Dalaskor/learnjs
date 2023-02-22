const filterRange = (arr, a, b) => {
	arr = arr.filter(item => (a <= item && item <= b));
	return arr;
}
