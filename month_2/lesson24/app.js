const text = 'I love JavaScript';

// console.log(text);

function sayHello() {
    alert('Hello!')
}

// sayHello();

function sum(n1, n2){
    // console.log(a+b)
    const result = n1+n2;
    return result;
}
function minus(n1, n2){
    // console.log(a+b)
    const result = n1-n2;
    return result;
}
function multiply(n1, n2){
    // console.log(a+b)
    return n1*n2;
}
function divide(n1, n2){
    // console.log(a+b)
    return n1/n2;
}

// sum(10, 20)

// sum(100, 99)
// const newNumber = 0;

// const num1 = +prompt('Number one');
// const num2 = +prompt('Number two');
// const operator = prompt('Type an operator (+,-,*,?)');

function calc(n1, n2, op) {
    // const newNumber = a**b;
    // const textResult = `${text} ${newNumber}`;

    if(op === '+'){
        return sum(n1, n2);
    } else if(op === '-'){
        return minus(n1, n2);
    } else if(op === '*'){
        return multiply(n1, n2);
    } else if(  op === '/'){
        return divide(n1, n2);
    }

    // if(op === '+'){
    //     return n1+n2;
    // }
    // if(op === '-'){
    //     return n1-n2;
    // }
    // if(op === '*'){
    //     return n1*n2;
    // }
    // if(op === '/'){
    //     return n1/n2;
    // }

    return 'Error';
}

// console.log(
//     calc(num1, num2, operator)
// );

// console.log(newNumber)

const text1 = 'I';
const text2 = 'like';
const text3 = 'apple';
const text4 = 'and';
const text5 = 'orange';
const text6 = '!!!';


function reversedText(...args) {
    const result = args.reverse().join(' ');

    // const textFn = 'Hello Kitty!';
    // const reversedTextFn = textFn.split(' ').reverse().join(' ');

    return result;
}


console.log(
    reversedText(text4, text1, text2, text3, text4, text5, text6)
);

// Создайте функцию, которая спрашивает возраст. Если 18 или старше, то говорит, что Совершеннолетний, если младше, то совершеннолетний

const age= +prompt('Введите Ваш возраст')

function getIfUserLegalAge (age){
    if (age < 18){
        return 'Вы нелегал';
    } else if(age >= 18) {
        return 'Вы легал';
    }
}

console.log( getIfUserLegalAge(age) );
