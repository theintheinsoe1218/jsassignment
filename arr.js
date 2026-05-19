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