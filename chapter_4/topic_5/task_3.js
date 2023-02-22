const Accumulator = (startingValue) => {
	this.value = startingValue;
	this.read = () => {
		this.value += Number(prompt('Enter value: ', 0));
	}
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
