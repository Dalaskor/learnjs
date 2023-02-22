const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('Enter your login: ', login => {
	if(login === 'Админ') {
		readline.question('Your password: ', password => {
			if(password === 'Я главный') {
				console.log('Здравствуйте!')
			} else if (password === 'Другое') {
				console.log('Неверный пароль')
			} else if (password === 'Отмена') {
				console.log('Отменено')
			}
			readline.close()
		})
	} else if (login === 'Другое') {
		console.log('Я вас не знаю')
	} else if (login === 'Отмена'){
		console.log('Отменено')
	}
	readline.close();
});
