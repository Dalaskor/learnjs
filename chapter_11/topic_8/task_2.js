class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

const loadJson = async (url) => {
    let response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}

const demoGithubUser = async () => {
    let user;
    while(true) {
        let name = prompt("Введите логин?", "iliakan");

        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            break;
        } catch(err) {
            if (err instanceof HttpError && err.response.status == 404) {
            console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
        }
    }

    console.log(`Полное имя: ${user.name}.`);
    return user;
}

demoGithubUser();
