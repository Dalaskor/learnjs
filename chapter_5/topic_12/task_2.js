let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

const replacer = (key, value) => {
	return (key != "" && value == meetup) ? undefined : value;
}

alert( JSON.stringify(meetup, replacer));
