const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the first number: ', num1 => {
    readline.question('Enter the second number: ', num2 => {
        let sum = parseFloat(num1) + parseFloat(num2);
        console.log(`The sum is: ${sum}`);
        readline.close();
    });
});
