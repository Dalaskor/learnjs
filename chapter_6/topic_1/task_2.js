const factorial = (n = 0) => {
    if (n != 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
}

console.log(factorial(10));
