const sum = (a = 0) => {
    return function(b = 0) {
        return a + b;
    };
};

console.log(sum(5)(7));
