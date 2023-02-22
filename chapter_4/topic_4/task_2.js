let calculator = {
	read: () => {
		this.num1 = Number(prompt('Enter a: ', 0));
		this.num2 = Number(prompt('Enter b: ', 0));
	},
	sum: () => {
		return this.num1 + this.num2;
	},
	mul: () => {
		return this.num1 * this.num2;
	}
}
