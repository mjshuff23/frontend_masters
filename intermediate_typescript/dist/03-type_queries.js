// Type Queries
import { Fruit } from '../dist/01-declaration_merging.js';
const date = new Date();
//  - typeof: Obtain the type of a value
async function main() {
    const apiResponse = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos/1'),
        Promise.resolve('foo'),
    ]);
}
const MyFruit = Fruit;
const banana = MyFruit.createBanana();
console.log(banana);
