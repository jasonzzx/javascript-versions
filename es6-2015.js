// class
class Person {
    constructor(name) { this.name = 'Jason' }
    print() { console.log(this.name) }
}

const jason = new Person('Jason')
jason.print()

// ES Module
// export default function addNum(num1, num2) { return num1 + num2 }
// import addNum from './es6-2015'
// console.log(addNum(1, 2))

// Arrow
const func = (a, b) => a + b
func(1, 2)

// Default parameters
function defaultParam(param = 'default') {}

// Template literals
const num1 = 5,
    num2 = 10
console.log(`Fifteen is ${num1 + num2}`);

// Destructuring assignment
let a, b;
[a, b] = [1, 2];

// Spreading (Spread Operator)
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];

// Object Property Shorthand
const name = 'Jason',
    company = 'HSBC';
const person = { name, company };

// Promise
Promise.resolve().then(() => console.log(2))
console.log(1);

// let and const
let name = 'Jason'
const pi = 3.14