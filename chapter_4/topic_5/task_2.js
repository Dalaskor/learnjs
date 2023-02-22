const Calculator = () => {
	this.read = () => {
		this.num1 = Number(prompt('Enter num1: ', 0));
		this.num2 = Number(prompt('Enter num2: ', 0));
	};
	this.sum = () => {
		return this.num1 + this.num2;
	};
	this.mul = () => {
		return this.num1 * this.num2;
	};
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
