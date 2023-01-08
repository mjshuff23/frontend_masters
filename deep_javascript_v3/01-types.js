// Types
// Primitive Types
// Misconception: Everything in JavaScript is an object.
// Primitive Types: number, string, boolean, undefined, symbol, <bigint></bigint> and object
// Other Types: null, array, function, date, regexp, error, undeclared
let a = BigInt(9007199254740991); // 9007199254740991n
console.log(typeof a);

// typeof - returns the type of the operand as a string
//  possible values: number, string, boolean, undefined, symbol, object, function
console.log((typeof 1)); // number
console.log((typeof (() => {}))) // function
// watch for:
console.log((typeof null)); // object
// use
const isNull = null;
console.log(isNull === null) // true
// watch for:
console.log(typeof [3, 4, 5]); // object
// use
const arr = [3, 4, 5];
console.log(Array.isArray(arr)); // true


// BigInt
// 64-bit integer
const myBigInt = 9007199254740991n; // n denotes BigInt
// or
const myBigInt2 = BigInt(900719925474);
console.log(typeof myBigInt2); // bigint

// undefined vs undeclared vs uninitialized
// undefined - variable declared but not assigned a value
let myVar;
console.log(myVar); // undefined
console.log(typeof myVar); // undefined
// undeclared - variable not declared
// console.log(myVar2); // ReferenceError: myVar2 is not defined
// console.log(typeof myVar2); // ReferenceError: myVar2 is not defined
// uninitialized - variable declared but not initialized
let myVar3; // IN THE TEMPORAL DEAD ZONE

// NaN and isNaN
// NaN - Not a Number
// isNaN - returns true if the operand is NaN
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true

// You should use Number.isNaN() instead of isNaN() because isNaN() coerces the operand to a number before checking if it is NaN, which is faulty in most cases.

// Negative 0
console.log(-0 === 0); // true
console.log(-0 === -0); // true
const myNegativeZero = -0;

// How to correctly check for negative zero
console.log(Object.is(myNegativeZero, 0)); // false
console.log(Object.is(myNegativeZero, -0)); // true