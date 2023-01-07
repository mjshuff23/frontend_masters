// Variadic Tuple Types
// --------------------
// We know that a tuple type is an ordered collection (often of known length),
//  with the type of each member known as well

type Color = [
  number, // red
  number, // green
  number, // blue
]

enum Sandwich {
  BLT,
  PBJ,
  Turkey,
  Hamburger,
  VeggieBurger,
}

// For a while, it's also been possible to use a spread operator as the last
//  element of a tuple type, to indicate that the tuple can have any number
type SandwichOrder = [
  number, // price
  Sandwich, // type of sandwich
  ...string[], // any number of extras
]

const order1: SandwichOrder = [3.99, Sandwich.BLT, 'lettuce', 'tomato'];
const order2: SandwichOrder = [4.99, Sandwich.PBJ, 'peanut butter', 'jelly', 'banana'];
// const orderWithError: SandwichOrder = [4.99, Sandwich.PBJ, 'peanut butter', 'jelly', 'banana', 3];

// We can do this generically as well
type MyTuple<Type> = [number, ...Type[]];

const tuple1: MyTuple<string> = [1, 'a', 'b', 'c'];
const tuple2: MyTuple<number> = [1, 2, 3, 4, 5];

/**
 * Return an array containing everything except the first element
 */
function tail<Type extends any[]>(arg: readonly [number, ...Type]) {
  const [_, ...rest] = arg;
  return rest;
}

console.log(order1)
const orderWithoutPrice = tail(order1);
console.log(orderWithoutPrice);

function returnArray<Type extends any[]>(arg: Type): Type {
  return arg;
}

const array1: [Sandwich.BLT, "lettuce"] = [Sandwich.BLT, "lettuce"]

const result = returnArray(array1);

// We can now do multiple spreads in a tuple
type MyNewTuple = [
  ...[number, number],
  ...[string, string, string]
]

const x: MyNewTuple = [1, 2, 'a', 'b', 'c'];

// It's important to note that only one...rest[] element is possible in a given
//  tuple, but it doesn't necessarily have to be the last element
type YESCompile1 = [...[number, number], ...string[]];
// type NOCompile1 = [...number[], ...string[]];  // A rest can not follow another rest
type YESCompile2 = [boolean, ...number[], string];
