const camelize = (str) => {
	str = str.split('-');
	str = str.map(
		(wrd, inx) => inx === 0 ? wrd : wrd[0].toUpperCase() + wrd.slice(1)
	);
	str = str.join('');
}
