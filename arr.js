const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);

console.log(fruits[0]);

fruits.push("Orange");
console.log(fruits);


fruits.pop();
console.log(fruits);

console.log(fruits.length);


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

const numbers = [10, 5, 30, 20];

let max = numbers[0];

for (let num of numbers) {
    if (num > max) max = num;
}

console.log(max);

let min = numbers[0];

for (let num of numbers) {
    if (num < min) min = num;
}

console.log(min);


let sum = 0;

for (let num of numbers) {
    sum += num;
}

console.log(sum);

console.log(numbers.reverse());


function getName(person) {
    return person.name;
}

console.log(getName({ name: "Mg Mg", age: 20 }));

function cartTotal(cart) {
    let total = 0;

    for (let item of cart) {
        total += item.price;
    }

    return total;
}

const cart = [
    { name: "Book", price: 1000 },
    { name: "Pen", price: 500 },
    { name: "Bag", price: 2000 }
];

console.log(cartTotal(cart));

function updateAge(person, newAge) {
    person.age = newAge;
    return person;
}

console.log(updateAge({ name: "Mg Mg", age: 20 }, 25));

function average(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return sum / arr.length;
}

console.log(average([10, 20, 30]));

function multiplyArray(arr, num) {
    let result = [];

    for (let value of arr) {
        result.push(value * num);
    }

    return result;
}

console.log(multiplyArray([1,2,3], 2)); 
//16
function countVowels(text) {
    let count = 0;
    let vowels = "aeiou";

    for (let char of text.toLowerCase()) {
        if (vowels.includes(char)) count++;
    }

    return count;
}

console.log(countVowels("Hello"));


function login(username, password) {
    return username === "admin" && password === "1234";
}

console.log(login("admin", "1234"));

function squareArray(arr) {
    let result = [];

    for (let num of arr) {
        result.push(num * num);
    }

    return result;
}

console.log(squareArray([2,3,4]));

const user = { name: "Mg Mg", age: 20 };

for (let key in user) {
    console.log(key, user[key]);
}


const students = [
    { name: "A", age: 20 },
    { name: "B", age: 21 },
    { name: "C", age: 22 }
];

console.log(students);


function findStudent(students, name) {
    for (let s of students) {
        if (s.name === name) return s;
    }
    return null;
}

console.log(findStudent(students, "B"));


function findMaxAge(users) {
    let max = users[0].age;

    for (let u of users) {
        if (u.age > max) max = u.age;
    }

    return max;
}

const users = [
    { name: "Aung Aung", age: 25 },
    { name: "Mg Mg", age: 30 },
    { name: "Su Su", age: 22 }
];

console.log(findMaxAge(users));

function toggleStatus(todo) {
    todo.isCompleted = !todo.isCompleted;
    return todo;
}
const todo = { title: "Learn JavaScript", isCompleted: false };
console.log(toggleStatus(todo));

function isEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
console.log(isEqual({ name: "A", age: 20 }, { name: "A", age: 20 }));

function rotateLeft(arr) {
    let first = arr.shift();
    arr.push(first);
    return arr;
}

console.log(rotateLeft([1,2,3,4,5]));

