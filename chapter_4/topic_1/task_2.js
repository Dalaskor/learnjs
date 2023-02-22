const isEmpty = (obj) => {
	let isObjEmpty = true
	for (key in obj) {
		isObjEmpty = false
	}
	return isObjEmpty
}

let schedule = {};
console.log(isEmpty(schedule))
schedule["8:30"] = "get up";
console.log(isEmpty(schedule))
