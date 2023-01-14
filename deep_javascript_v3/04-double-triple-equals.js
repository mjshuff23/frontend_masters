// Double vs Triple Equals
// =======================
// The == operator is called the "abstract equality comparison" operator.
// The === operator is called the "strict equality comparison" operator.

//// Abstract Equality Comparison ////
// Broadly speaking, abstract equality (==) comparison will coerce the values
//  to the same type before comparing them.  It's a very loose comparison.
//  Prefers to coerce the values to numbers, then strings, then booleans.

// When the types match == and === are the same perform the same strict check.
 
// == Corner Cases
// ---------------
console.log([] == ![]);

// Avoid == when:
//  comparing 0 or "" or " "
//  non-primitive values
//  == true or  == false
