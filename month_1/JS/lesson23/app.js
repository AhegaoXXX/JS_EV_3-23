const number = 10;
const string = 'Hello world!';
const boolean = true;
const bigInt = 2n;
const symbol = Symbol('abc');
const voidNull = null;
const undefinedValue = undefined;

// const object = {};

// console.log(number, string, boolean, bigInt, symbol, voidNull, undefinedValue, object);


// '' == false 

// \n

// console.log('Adrian' && '' && 'Gabrielle')

// console.log('Adrian' || '' || 'Gabrielle')

// console.log(false || false || '' || 0 || null || 10 || undefined || 0)

// console.log(true && 7 && 10)

// && - И
// || - Или

// const userAnswer1 = prompt('Введите Ваш возраст');
// const userAnswer2 = prompt('Введите Ваш год рождения');

// if (userAnswer1 || userAnswer2) {
//     console.log(userAnswer1, userAnswer2);
//     alert('Hi')
// }

// if(userAnswer1 && userAnswer2){
//     console.log(userAnswer1, userAnswer2);
//     alert('Hello !!!!!!!');
// }
// prompt('')
const text = "Let's Go !!!!!!!!???????????";
let text2 = "Ivan";
text2 = 'Andrey';


const text3 = text + ' ' + text2;
const num = 7;

console.log(text);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.trim());
console.log(text.slice(5));
console.log(text.slice(1, 23));
console.log(text.substring(1, 23));
console.log(text3.concat(text2));
console.log(text.replace('?', ''))
console.log(text.replaceAll('?', 'Ivan'))
console.log(text.charAt(10));
console.log(text.indexOf('L'));
console.log(text.length);

// Сделайте объект, промпт, и если пользователь введет туда Имя, то оно попадет в объект, добавьте фамилию, сделайте всё с большой букывы, добавьте инициалы из фамилии и имени в объект

// Elmurat Alanov
// EA

const username = prompt('Введите имя');
const surname = prompt('Введите Фамилия');
const obj = {}

if(username && surname){
    obj.name = username.toUpperCase();
    obj.surname = surname.toUpperCase();
    obj.initials = username.charAt(0).toUpperCase() + surname.charAt(0).toUpperCase();
}

console.log(obj);
