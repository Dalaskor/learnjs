const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Enter expression `, expression => {
    console.log(eval(expression));
    readline.close();
});
