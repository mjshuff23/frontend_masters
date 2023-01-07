// let first: string & number;
// let second: String & Number;

// first = 'abc'; // type 'string' is not assignable to type 'never'
// second = 'abc'; // Type 'string' is not assignable to type 'String & Number'. Type 'string' is not assignable to type 'Number'.

// second = new String("abc"); // Type 'String' is not assignable to type 'String & Number'.  Type 'String' is missing the following properties from type 'Number': toFixed, toExponential, toPrecision

// interface Foo extends String, Number {}

interface Bar extends String, Number {
  valueOf(): never;
  toString(): string;
} 

let bar: Bar = {
  // spread a new Number object into the object
  ...new Number(123),
  // spread a new String object into the object
  ...new String("abc"),
  // spread valueOf() into the object
  ...{
    valueOf() {
      return "" as never;
    }
  }
}

let second = bar;
console.dir(second);