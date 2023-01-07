"use strict";
// let first: string & number;
// let second: String & Number;
let bar = {
    // spread a new Number object into the object
    ...new Number(123),
    // spread a new String object into the object
    ...new String("abc"),
    // spread valueOf() into the object
    ...{
        valueOf() {
            return "";
        }
    }
};
let second = bar;
