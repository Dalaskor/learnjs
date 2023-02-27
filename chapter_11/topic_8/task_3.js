const wait = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
};

const f = () => {
    wait().then(result => console.log(result));
};

f();
