let first: string & number;
let second: String & Number;

first = 'abc'; // type 'string' is not assignable to type 'never'
second = 'abc'; // Type 'string' is not assignable to type 'String & Number'. Type 'string' is not assignable to type 'Number'.

second = new String("abc"); // Type 'String' is not assignable to type 'String & Number'.  Type 'String' is missing the following properties from type 'Number': toFixed, toExponential, toPrecision