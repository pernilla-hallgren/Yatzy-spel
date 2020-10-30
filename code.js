// const diceOne = document.querySelector('#one');

function diceNum() {
    const num1 = Math.random();
    const num2 = num1 * 6;
    const num3 = Math.ceil(num2);
    console.log(num3);
    const resultDiceOne = document.querySelector('#one');
    resultDiceOne.textContent = num3;   
}
function diceNum2() {
    const num1 = Math.random();
    const num2 = num1 * 6;
    const num3 = Math.ceil(num2);
    console.log(num3);
    const resultDiceTwo = document.querySelector('#two');
    resultDiceTwo.textContent = num3;
}

function diceNum3() {
    const num1 = Math.random();
    const num2 = num1 * 6;
    const num3 = Math.ceil(num2);
    console.log(num3);
    const resultDiceThree = document.querySelector('#three');
    resultDiceThree.textContent = num3;
}

function diceNum4() {
    const num1 = Math.random();
    const num2 = num1 * 6;
    const num3 = Math.ceil(num2);
    console.log(num3);
    const resultDiceFour = document.querySelector('#four');
    resultDiceFour.textContent = num3;
}

function diceNum5() {
    const num1 = Math.random();
    const num2 = num1 * 6;
    const num3 = Math.ceil(num2);
    console.log(num3);
    const resultDiceFive = document.querySelector('#five');
    resultDiceFive.textContent = num3;
}


document.querySelector('#throwDice').addEventListener('click', diceNum);
document.querySelector('#throwDice').addEventListener('click', diceNum2);
document.querySelector('#throwDice').addEventListener('click', diceNum3);
document.querySelector('#throwDice').addEventListener('click', diceNum4);
document.querySelector('#throwDice').addEventListener('click', diceNum5);
