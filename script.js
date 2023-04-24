//Створити скрипт для додавання, віднімання, множення
// та поділу двох чисел та виведення результатів.
firstVal = prompt("Input 1 value: ", 0);
secondVal = prompt("Input 2 value: ", 0);

sum = parseInt(firstVal) + parseInt(secondVal);
console.log(`sum: ${sum}`);

subtraction = firstVal - secondVal;
console.log(`minus: ${subtraction}`);

multiplication = firstVal * secondVal;
console.log(`multiplication: ${multiplication} `);

division1 = firstVal / secondVal;
divisionRound=Math.round(firstVal/secondVal);
console.log(`division1: ${division1} divisionRound: ${divisionRound} `);

