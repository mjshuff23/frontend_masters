"use strict";
const str = "hello";
// if you spread an array into an object, the keys will be the index of 
//  the array
let val = { ...str.split('') };
console.log(val);
