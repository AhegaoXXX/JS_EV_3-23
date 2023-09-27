// const userAge = +prompt('Enter your age')

// if(userAge <= 16 && userAge > 0){
//     alert('Марвел');
// } else if(userAge > 16 && userAge <= 21) {
//     alert('Отступники');
// } else if(userAge > 21 && userAge <= 100){
//     alert('В бой идут одни старики')
// } else {
//     alert('Ошибка, введите корректный возраст')
// }

// const username = "Alex";
// const username2 = "Bob";

// if(username === "Alex") {
//     alert('Your name is Alex!')
// } else {
//     alert('Your name is not Alex!')
// }

// username2 === "Bob"
//     ? alert("Your name is Bob!")
//     : username2 === "Bobby"
//         ? alert("Your name is Bobby")
//         : alert("Your name is not Bob or Bobby!");

// ? :  Тернарный оператор

// const userAge = prompt("Введите Ваш возрат");

// 1) Если пользователю 18 лет или больше, то сказать что он 'Совершеннолетний', если нет 18, то 'Несовершеннолетний'

// 2) Вам дана переменная month. В ней лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень)

// const month = 4;

// if(month === 12 || month === 1 || month === 2){
//     console.log('зима')
// } else if(month >= 3 && month <= 5 ){
//     console.log('весна')
// } else if(month >= 6 && month <= 8 ){
//     console.log('лето')
// } else if(month >= 9 && month <= 11 ){
//     console.log('осень')
// }

const data = prompt('+, -, *, /');

const num1 = +prompt('Number one');
const num2 = +prompt('Number two');

const viewOperation = `${num1} ${data} ${num2}`;

switch (data) {
    case '+':
        console.log(`${viewOperation}=${num1+num2}`)
        break;
    case '-':
        console.log(`${viewOperation}=${num1-num2}`)
        break;
    case '*':
        console.log(`${viewOperation}=${num1*num2}`)
        break;
    case '/':
        console.log(`${viewOperation}=${num1/num2}`)
        break;

    default:
        console.log('Error')
}

console.log('aboba');


условие ? верно : неверно


