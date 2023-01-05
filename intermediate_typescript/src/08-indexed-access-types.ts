// Indexed Access Types
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#index-types
//  - Indexed Access Types provide a mechanism for retrieving part(s) of an
//     array or object type via indices.  At the simplest level, these kinds
//     of types are all about accessing some part of another type via an index
interface CarShape {
  make: string;
  model: string;
  year: number;
  color: {
    red: string;
    green: string;
    blue: string;
  }
}

let carColor: CarShape['color']; // Can not use dot notation here
let carMake: CarShape['make'] = 'Toyota';
// let notACarProperty: CarShape['notAProperty'] = undefined; // Property 'notAProperty' does not exist on type 'CarShape'
console.log(typeof carMake);
let carColorRedComponents: CarShape['color']['red'];

// You can also pass a Union type to an indexed access type
let carProperty: CarShape['make' | 'model' | 'color'];