// function doubleNumber () {
//     const userPrompt = +prompt();

//     console.log( userPrompt * 1000 );
// }

// doubleNumber()


// function nameFunction () {
//     console.log(arguments);
// }
// nameFunction(8,22,3);


// const myFunction = function () {
//     console.log(arguments);
// }
// myFunction(1,2,3);


// const myArrowFunction = () => {
//     console.log(arguments);
// }
// myArrowFunction(1,2,3);

// (function sayHi() {
//     alert('Hello')
// })()


// let number = 0;

// console.log(number);

// const increment = () => {
//     if (number >= 10) return;
//     // number = number + 1;
//     number++;
// }
// const toZero = () => number = 0;
// const toZero = () => (number = 0);
// const toZero = () => {number = 0};
// const decrement = () => {
//     if (number <= -10) return;
//     number--;
// }
// const doubleMultiply = () => {
//     if (number === 0) {
//         number ++
//         return;
//     }
//     number = number *2;
// }

// 0

// decrement()
// increment()
// increment()
// doubleMultiply()
// toZero()
// doubleMultiply()
// increment()
// doubleMultiply()
// toZero()
// increment()
// decrement()

// ?

// console.log(number);


const word1 = 'Город дорог';
const word2 = 'Ароза упала на лапу Азора';

const word3 = 'Ахмад сила';
const word4 = 40004;

const isPalindrome = (word)=>{
    const result = {
        positive: 'Это палиндром',
        negative: 'Это НЕ палиндром',
    };

    const res1 = word.toString().toLowerCase().trim().replaceAll(' ', '');

    const res2 = res1.split('').reverse().join('');

    if(res1 === res2){
        return result.positive;
    } else {
        return result.negative;
    }
}

console.log( isPalindrome(word1) );
console.log( isPalindrome(word2) );
console.log( isPalindrome(word3) );
console.log( isPalindrome(word4) );


const text = 'Ароза упала на лапу Азора';

const findLetter = (word, pos) => {
    return word[pos-1];
}

console.log( findLetter(text, 7) );

