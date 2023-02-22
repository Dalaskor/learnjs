const printNumbers1 = (from, to) => {
    let current = from;

    let timerId = setInterval(() => {
        console.log(current);

        if (current === to) {
            clearInterval(timerId);
        }

        current++;
    }, 1000);
};

printNumbers1(1, 10);
