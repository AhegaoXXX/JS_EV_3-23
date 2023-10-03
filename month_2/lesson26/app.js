// console.log( typeof [] );

// const object = {};

// const myFunc = ()=>{};

// const myArray = [
//     'hello',
//     1,
//     2,
//     3,
//     'bro',
//     0,
//     'Congratulations!',
//     99,
//     { name: 'Jeff', age: 34, },
//     [],
// ];

// const myObject = {
//     0: "hello",
//     1: 1,
//     2: 2,
//     3: 3,
//     4: "bro",
//     5: 0,
// }

// console.log(myArray, myObject);

// console.log(myObject[4]);
// console.log(myArray[0]);

// console.log(['hello', [1, 2, [{a: 99}, ['Jackie']],]]);

// console.log(myArray[ myArray.length-1 ]);
// console.log(myArray.at(-2).age);
// console.log(myArray.at(0));
// console.log(myArray.at(4));
// console.log(myArray.length);

// const myArray = [ 1, 2, 'rabbit', ];
// const myArray2 = [ 1, 2, 'rabbit', ];

// const myText = 'Hello everyone from Kyrgyzstan';

// console.log(myArray.reverse());
// console.log(myText);
// console.log(myText.split(''));
// console.log(myText.split('').reverse());
// console.log(myText.split(' ').reverse().join(' '));
// console.log(myText.split(' '));
// console.log(myArray.indexOf('rabbit'));
// console.log(myText.indexOf('K'));

// const myArray = [ 1222, 2, 'rabbit', ];

// console.log(myArray);
// console.log('-----------------');

// myArray.length--;
// delete myArray[1];

// pop(), push(), shift(), unshift(),

// const myValue = myArray.unshift(404);
// myArray.push('Hello dear')
// myArray.push('Hello dear')

// console.log(myArray);
// console.log('-----------------');
// console.log(myValue);

// const names = [ 'akjol', 'travis', 'scott', 'peter', ];

// console.log(
//     names.at(0).charAt(0).toUpperCase()
//     + names.at(1).charAt(0).toUpperCase()
// );

// AT

// const names = [ 'Akjol', 'Travis', 'Scott', 'Peter', ];

// добавить в конце Paul
// добавить в начале Alice и Rose
// удалить Peter
// показать конечный массив, его длину

// names.pop(); 
// names.push('Paul');
// names.unshift('Alice', 'Rose');
// names.splice(5, 1)

// console.log(names);
// console.log(names.length);

const object = {
    'John': 24,
    'Igor': 4,
    'Bakyt': 90,
    'Nursultan': 41,
}

const keys = Object.keys(object);
// const values = Object.values(object);
// const entries = Object.entries(object);

keys[3] = '66';
keys[4] = 100;
keys[6] = 1000;
keys.splice(3, 4)

console.log(keys);
