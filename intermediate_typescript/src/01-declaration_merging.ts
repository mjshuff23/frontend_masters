// Declaration Merging
//  We have different types of 'named things' in TypeScript, including values
//  and functions (and occasionally things that can be used as both).  We are
//  going to learn how to examine and understand these different types of
//  entities
interface Fruit {
  name: string;
  mass: number;
  color: string;
}

// const Fruit = {
//   name: 'banana',
//   mass: 120,
//   color: 'yellow',
// }

class Fruit {
  static createBanana(): Fruit {
    return { name: 'banana', mass: 120, color: 'yellow' };
  }
}

namespace Fruit {
  function createFruit(): Fruit {
    return Fruit.createBanana();
  }
}

// Let's coin a term here and call `banana` and `Fruit` both `identifiers`, in
//  that they provide a named reference to some information (be it value | type)

// Stacking Multiple Things on an Identifier
//  It may seem silly, but what if we renamed `banana` to `Fruit`?
//  They are now stacked.  In fact, we can stack a third thing on top of them
//  called a `namespace` (which we will learn about later)
export { Fruit }