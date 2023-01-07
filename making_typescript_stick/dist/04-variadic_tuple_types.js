"use strict";
// Variadic Tuple Types
// --------------------
// We know that a tuple type is an ordered collection (often of known length),
//  with the type of each member known as well
var Sandwich;
(function (Sandwich) {
    Sandwich[Sandwich["BLT"] = 0] = "BLT";
    Sandwich[Sandwich["PBJ"] = 1] = "PBJ";
    Sandwich[Sandwich["Turkey"] = 2] = "Turkey";
    Sandwich[Sandwich["Hamburger"] = 3] = "Hamburger";
    Sandwich[Sandwich["VeggieBurger"] = 4] = "VeggieBurger";
})(Sandwich || (Sandwich = {}));
const order1 = [3.99, Sandwich.BLT, 'lettuce', 'tomato'];
const order2 = [4.99, Sandwich.PBJ, 'peanut butter', 'jelly', 'banana'];
const tuple1 = [1, 'a', 'b', 'c'];
const tuple2 = [1, 2, 3, 4, 5];
/**
 * Return an array containing everything except the first element
 */
function tail(arg) {
    const [_, ...rest] = arg;
    return rest;
}
console.log(order1);
const orderWithoutPrice = tail(order1);
console.log(orderWithoutPrice);
function returnArray(arg) {
    return arg;
}
const array1 = [Sandwich.BLT, "lettuce"];
const result = returnArray(array1);
const x = [1, 2, 'a', 'b', 'c'];
