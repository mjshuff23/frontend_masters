// Will it Compile Quiz
// 1. Yes, because `NaN` is a number in JavaScript for some reason.
let age = 38
age = Number.NaN;

// 2. Yes Unfortunately, because tuples are a specialized flavor of arrays (and at runtime, they actually are just regular arrays) they expose the entire array API. Look at the type signature of .push()
const vector3: [number, number, number] =[3, 4, 5];
vector3.push(6);

// 3 No, you can not have types and interfaces stacked on top of each other
// type ColorExample = {
//   red: number;
//   green: number;
//   blue: number;
// }

// interface ColorExample {
//   alpha: number;
// }

// 4. No, because friends has never been initialized in the constructor
// class PersonTest {
//   name: string;
//   friends: Person[];
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// 5. No, you override a base classes property with a different type
abstract class PersonType {
  public abstract name: string;
}

// class Student extends PersonType {
//   // public name: string | string[] = ["Mike North"];
// }

// 6.  No the shape doesn't match
// interface ColorEx {
//   red: number;
//   green: number;
//   blue: number;
// }

// function printColor(color: ColorEx) {
//   console.log(color.red, color.green, color.blue);
// }

// const colorExample: ColorEx = {
//   red: 255,
//   green: 0,
//   blue: 0,
// }

// printColor({
//   red: 255,
//   green: 0,
//   blue: 0,
//   alpha: 0.5,
// })


// 7. Yes
type ColorEx = {
  red: number;
  green: number;
  blue: number;
}

class ColorValue implements ColorEx {
  constructor(
    public red: number,
    public green: number,
    public blue: number
  ) { }
}

// 8. No, when merged declarations are exported, they must all be
// export class Person {
//   name: string = "";
// }

// interface Person {
//   age?: number;
// }

// 9.  Nope, but you can make it pass by putting a ! before the colon to
// indicate that the property will be initialized in the constructor
// class PersonNine {
//   name: string;  // Error, should be name!: string;
//   constructor(userId: string) {
//     // Fetch user's name from an API endpoint
//     fetch(`/api/users/${userId}`)
//       .then(response => response.json())
//       .then((info) => {
//         this.name = info.name // set user's name;
//       })
//   }
// }

// 10. No, but it is nuanced
// enum Language {
//   TypeScript = "TS",
//   JavaScript,  // Once one value is initialized, the rest must be initialized
// }

enum Editor {
  SublimeText,
  VSCode = "vscode",
}

enum Linter {
  ESLint,
  TSLint = "tslint", // You can restart the auto-incrementing by assigning a #
  JSLint = 3,
  JSHint,
}


// 11 No because we do not provide context about what 'this' is
// function handleClickMouse(/*this: HTMLInputElement,*/ evt: Event) {
//   const $element = evt.target as HTMLElement;
//   if (this.value !== '') {
//     this.value = this.value.toUpperCase();
//   }
// }

// 12.  NO, you can't have two private fields with the same name
// class PersonTwelve {
//   #name: string;
//   private age: number;
//   constructor(name: string, age: number) {
//     this.#name = name;
//     this.age = age;
//   }
// }

// class StudentTwelve extends PersonTwelve {
//   #name: string | string[];
//   private age: number;
//   constructor(name: string, age: number | null) {
//     super(name, age || 0);
//     this.#name = name;
//     this.age = age;
//   }
// }

// 13. Yes, this will compile. Because Ecma #private fields are not visible, even at runtime, outside of the class, there’s no collision between the two #name members.
class Person13 {
  #name: string;
  constructor(name: string) {
    this.#name = name;
  }
}

function makeName(name: string | string[]): string {
  if (Array.isArray(name)) return name.join(" ");
  else return name;
}

class Student13 extends Person13 {
  #name: string | string[];
  constructor(name: string | string[]) {
    super(makeName(name));
    this.#name = name;
  }
}