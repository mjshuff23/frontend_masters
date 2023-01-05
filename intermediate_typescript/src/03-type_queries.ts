// Type Queries
import { Fruit } from './01-declaration_merging';
//  Type queries allow us to obtain a type from a value\
//  - keyof: Obtain the keys of an object
//  - typeof: Obtain the type of a value
type DatePropertyNames = keyof Date;

// In JavaScript, we can have keys that are strings, numbers, or symbols
//  To just grab the strings:
type DatePropertyThatAreStrings = keyof Date & string;
type DatePropertyThatAreNumbers = keyof Date & number;
type DatePropertyThatAreSymbols = keyof Date & symbol;

const date = new Date();


//  - typeof: Obtain the type of a value
async function main() {
  const apiResponse = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/todos/1'),
    Promise.resolve('foo'),
  ])
  type ApiResponseType = typeof apiResponse;
}

const MyFruit = Fruit;
const banana: Fruit  = MyFruit.createBanana();
console.log(banana);

type FruitType = typeof banana;