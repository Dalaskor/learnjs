const getLocalDay = (date) => {
	let day = date.getDay();
	day = day === 0 ? 7 : day;
	return day;
}
