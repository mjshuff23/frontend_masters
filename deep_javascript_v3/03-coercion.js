// Abstract Operations
// 7.1.1 ToPrimitive ( input [ , PreferredType ] )
// The abstract operation ToPrimitive takes an input argument and an optional argument PreferredType. The abstract operation ToPrimitive converts its input argument to a non-Object type. This abstract operation functions as follows:

// toString(7.1.12): Takes any value and returns a string representation of it.
//  There are some cases where you get unexpected results with this method,
//  such as: when you call toString() on an array, which returns the string representation of the array's object reference, or when you call it on -0, which returns "0".

// Arrays: We lose the square brackets
// [] turns into ""
// [1, 2, 3] turns into "1,2,3"
// [null, undefined] turns into ","
// [[], [], []] turns into ",,"
// [,,,,] turns into ",,,,"

// Objects: We replace the square brackets with curly braces??
// {} turns into "[object Object]"
// {a: 1, b: 2} turns into "[object Object]"
// {toString() { return "X" }} turns into "X"

// toNumber(7.1.3): Takes any value and returns a number representation of it.
// Examples:
// "" turns into 0                     - [""] turns into 0
// "0" turns into 0                    - ["0"] turns into 0
// "-0" turns into -0                  - ["-0"] turns into -0
// " 009 " turns into 9                - [null] turns into 0
// "0." turns into 0                   - [undefined] turns into 0
// ".0" turns into 0                   - [1, 2, 3] turns into NaN
// "." turns into NaN                  - [[[[[[[]]]]]]] turns into 0
// "0xaf" turns into 175 (hexadecimal) - {a: 1} turns into NaN
// false turns into 0                  - { valueOf() { return 3 } } turns into 3
// true turns into 1
// null turns into 0
// undefined turns into NaN


// toBoolean(7.1.2): Takes any value and returns a boolean representation of it.
// Falsy: false, 0, -0, 0n, "", null, undefined, NaN
// Truthy: everything else.  Meaning it doesn't use toPrimitive, toString, or toNumber.

// Cases of Coercion
//  Sometimes we're using coercion when we don't even know it, for example
//  template literal strings:
const myNum = 12;
const myStr = `My number is ${myNum}`; // 12 is coerced to "12"

// If you're really trying be explicit, use the Capitalized versions of the
//  abstract operations:
const str = `My number is ${String(myNum)}`; // "My number is 12"

// The unary + operator is a shortcut for the ToNumber abstract operation:
const num = +"12"; // 12

// If you want to be explicit, use the Number() function:
const num2 = Number("12"); // 12

// The - operator is only meant to be used with numbers, so it will coerce
//  the value to a number first with the ToNumber abstract operation:  Giving
//  it a string will result in NaN.

// Implicit coercion also happens with if and while statements by using
//  the ToBoolean abstract operation:

// When using an if statement where you're checking the length of an array,
//  you should be aware that the ToBoolean abstract operation will be used
//  and some corner cases will result in unexpected behavior.  It's better to 
//  be explicit and use > 0 instead of just checking the length.

// With the ToBoolean, if you want to be explicit, use the Boolean() function:
const bool = Boolean("hello"); // true

Boolean(undefined); // false
Boolean(null); // false
Boolean(0); // false
Boolean({}); // true
Boolean([]); // true
Boolean(""); // false
Boolean(" "); // true

///////// Boxing /////////
//  How is it this primitive values have their own functions and properties,
//   such as .toString() and .valueOf()?  It's because they're objects, but
//   they're objects that are created behind the scenes and are not accessible
//   to us.  They're called "wrapper objects".  They're created when we need
//   them and then thrown away.  They're created with the Object() function.

///////// Corner Cases /////////
Number("");         // 0
Number(" ");        // 0
Number(null);       // 0
Number(undefined);  // NaN
Number([]);         // 0
Number([1, 2, 3]);  // NaN
Number([undefined]);// NaN
Number({});         // NaN

String(-0);                  // "0"
String(null);                // "null"
String(undefined);           // "undefined"
String([null]);              // ""
String([undefined]);         // ""
String([null, undefined]);   // ","

Boolean( new Boolean(false)); // true

// Any string full of whitespace is coerced to 0 because the ToNumber operation
//  first trims the whitespace, then checks if the string is empty.
studentsInput.value = "";
Number(studentsInput.value); // 0
studentsInput.value = " \t\r";
Number(studentsInput.value); // 0

1 < 2; // true
2 < 3; // true
1 < 2 < 3; // true

(1 < 2) < 3; // true
(true) < 3; // true
1 < 3; // true

3 > 2; // true
2 > 1; // true
console.log(3 > 2 > 1); // false

console.log((3 > 2) > 1); // false
console.log((true) > 1); // false
1 > 1;