const num1 = 10;
let num2 = 10;
var num3 = 10;

num3 = 20;
num2 = 200;
// num1 = 100; - ошибка т.к. const

// console.log(num1, num2, num3);

// const date = new Date();
const date2 = Date.now();

// console.log(date);
// console.log(date.getFullYear(), '- getFullYear');
// console.log(date.getDay());
// console.log(date.getHours());
// const dateNewYear = date.setHours(); 

// console.log(dateNewYear);
// console.log(date.toDateString(), '- toDateString');
// console.log(date.toTimeString(), '- toTimeString');

const date3 = Date.now();

const dateSeconds = date3 / 1000;
const dateMinutes = dateSeconds / 60;
const dateHours = dateMinutes / 60;
const dateDays = dateHours / 24;
const dateWeeks = dateDays / 7;
const dateMonths = dateDays / 30;
const dateYears = dateMonths / 12;
const dateYearsRounded = Math.round(dateYears);
const dateYearsFrom2000 = dateYearsRounded-(2000-1970)-2;

//Math
// console.log(dateYearsFrom2000);

const date = new Date();

const currentDay = prompt("Type month's date");
const currentMonth = date.getMonth()+1;
const currentYear = date.getFullYear();
const outputDate = `${currentDay}/${currentMonth}/${currentYear}`;

// console.log(currentDay)
// alert(outputDate)
console.log(outputDate)
console.log(date)

//Ожидаемый результат: 23/09/2023 или 23/Sep/2023
