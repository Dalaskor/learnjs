const getMaxSubSum = (nums) => {
	let sumMax = 0;
	let sum = 0;

	for (let num of nums) {
		sum += num;
		sumMax = Math.max(sumMax, sum);
		sum = sum < 0 ? 0 : sum
	}

	return sumMax;
}
