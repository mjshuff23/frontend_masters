// // Declaration Merging
// //  We have different types of 'named things' in TypeScript, including values
// //  and functions (and occasionally things that can be used as both).  We are
// //  going to learn how to examine and understand these different types of
// //  entities
// interface Fruit {
//   name: string;
//   mass: number;
//   color: string;
// }

// // const Fruit = {
// //   name: 'banana',
// //   mass: 120,
// //   color: 'yellow',
// // }

// class Fruit {
//   static createBanana(): Fruit {
//     return { name: 'banana', mass: 120, color: 'yellow' };
//   }
// }

// namespace Fruit {
//   function createFruit(): Fruit {
//     return Fruit.createBanana();
//   }
// }

// // Let's coin a term here and call `banana` and `Fruit` both `identifiers`, in
// //  that they provide a named reference to some information (be it value | type)

// // Stacking Multiple Things on an Identifier
// //  It may seem silly, but what if we renamed `banana` to `Fruit`?
// //  They are now stacked.  In fact, we can stack a third thing on top of them
// //  called a `namespace` (which we will learn about later)
// export { Fruit }

const is_a_value = 4;
type is_a_type = {};
namespace is_a_namespace {
  const foo = 4;
}

// How to test for a value
const x = is_a_value;  // The value position (right of the `=`)
const y: is_a_type = {};  // The type position (left of the `=`)

// Hover for a namespace
is_a_namespace;

// What is a namespace?
//  A namespace is a way to group together related values, types, and functions
//  into a single named entity.  It is a way to organize your code, and it is
//  also a way to provide a single named reference to a group of related
//  entities

function $(selector: string): NodeListOf<Element> {
  return document.querySelectorAll(selector);
}


namespace $ {
  export function ajax(arg: {
    url: string;
    data: any;
    success: (response: any) => void;
  }): Promise<any> {
    return Promise.resolve();
  }
}

export class Fruit {
  constructor(
    public readonly name: string,
    public readonly mass: number,
    public readonly color: string,
  ) {}

  static createBanana(): Fruit { return new Fruit('banana', 120, 'yellow'); }
}

// test for a value
const valueTest = Fruit; // Yes!
valueTest.createBanana();

// test for a type
const typeTest: Fruit = { name: 'banana', mass: 120, color: 'yellow' }; // Yes!
// typeTest.name = 'apple'; // readonly
// typeTest.createBanana(); // No!