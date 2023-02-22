const Calculator = () => {
	this.methods = {
		"-": (num1, num2) => num1 - num2,
		"+": (num1, num2) => num1 + num2
	};

	this.calculate = (str) => {
		let arr  = str.split(' '),
			num1 = Number(arr[0]),
			op = split[1],
			num2 = Number(arr[2])

		if (!this.methods[op] || isNaN(num1) || isNaN(num2)) {
			return NaN;
		}

		return this.methods[op](num1, num2);
	}

	this.addMethod = (nameOper, def) => {
		this.method[nameOper] = def;
	};
}
