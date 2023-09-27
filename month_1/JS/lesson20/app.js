const nameOne = "John";
// const userAnswer = prompt("What is your name?");

// if(userAnswer.trim().toLowerCase() === nameOne.toLowerCase()){
//     alert("You are cool!")
// } else {
//     alert("You are not John!")
// }

// if(false === false){
//     console.log(10_000)
// }

// const theNumber = prompt("Please enter a number...");

// if(+theNumber === 1){
//     console.log("Сегодня Удача")
// } else if(isNaN(+theNumber)) {
//     console.log("Введите правильное число")
// } else if(+theNumber === 0){
//     console.log("Сегодня Вы выспитесь")
// } else {
//     console.log("Сегодня Неудача")
// }

// typeof theNumber !== "number"
// isNaN(+theNumber)

// const result = prompt();

// if(result) alert(result);
// else alert('Error');

// const randomNumber = Math.round( Math.random() *10 );
// const userNum = prompt('Choose a random number');

// console.log(randomNumber)

// if (+userNum === randomNumber){
//     alert("You win!")
// }else{
//     alert('You lose!')
// }

//Ожидаемый результат: Пользователь вводит число и если оно совпадает с нашим, то нам говорят что Угадали, если нет, то Не угадали

// const num1 = prompt('First number')
// const num2 = prompt('Second number')

const num1 = 20;
const num2 = 5;

const userPrompt = prompt('+, -, * или /');

if(userPrompt === '+'){
    console.log(`${num1}+${num2}=${num1+num2}`);
}
else if(userPrompt === '-') {
    console.log(num1-num2);
}
else if(userPrompt === '*'){
    console.log(num1*num2);
}
else if(userPrompt === '/'){
    console.log(num1/num2);
}
