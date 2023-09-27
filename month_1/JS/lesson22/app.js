const googleAge = 25;

const obj = {
    name: 'John',
    age: 25,
    obj: {
        name: 'Sarah',
        age: 36,
        country: 'USA',
        female: undefined,
    },
    male: true,
};
// console.log(obj);

obj.age = 22;
obj.age = 199;
obj.obj.country = 'Kyrgyzstan';

// console.log(obj.age);
// console.log(obj['age']);
// console.log(obj.name);
// console.log(obj);

// obj.age = 100;

// "male" in obj
// obj.male
// obj.male === true

// if(!!obj.obj.female){
//     alert('Вы готовы к переезду')
// } else {
//     alert('Вы не готовы к переезду')
// }

// const object = {
//     first: 100_000,
//     second: 200_000,
// }

// delete object.first;
// object.first = 1_000_000;

// console.log(object);

let name1 = 'Ilya';
const name2 = 'Ilya';

name1 = 'Bakyt';  

// const user1 = {
//     name: name1,
//     age: 23,
//     object: {
//         name: 'Alan',
//         age: 14,
//     }
// }

// const user2 = {
//     name: name1,
//     age: 23,
// }

// const user3 = Object.assign({}, user1);
// const user3 = JSON.parse(JSON.stringify(user1));

// user3.country = "Russia";
// user1.object.name = 'Jesse'

// console.log(user1, '- user 1');
// console.log(user3, '- user 3');

// console.log(user3 === user1)
// console.log(user3.object === user1.object)


// Создайте объект user1, где будет name Alex, surname Smith, email: alex.smith@gmail.com

// Создайте объект user2, где будет name Jessica, surname Anderson, email: jessica.anderson@gmail.com

// Добавьте каждому age

// Создайте объект внутри которого будут прошлые объекты с пользователями и они не будут равны по ссылке

// const user3 = structuredClone(user1);

const user1 = {
    name: 'Alex',
    surname: 'Smith',
    email: 'alex.smith@gmail.com',
}

const user2 = {
    name: 'Jessica',
    surname: 'Anderson',
    email: 'jessica.anderson@gmail.com',
}

const user11 = structuredClone(user1)
const user22 = structuredClone(user2)

const user3 = {
    user11,
    user22,
}

console.log(user3);







// console.log(user1.toString());
