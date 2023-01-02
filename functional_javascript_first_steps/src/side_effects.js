// Imperative
let name = 'Alonzo';
let greet = 'Hi';

console.log(greet + ' ' + name); // Hi Alonzo

greet = 'Howdy';

console.log(greet + ' ' + name); // Howdy Alonzo

// Functional
function greet1(greeting, name) {
  return `${greeting}, ${name}!`;
}

console.log(greet1('Hi', 'Alonzo')); // Hi, Alonzo!
console.log(greet1('Howdy', 'Alonzo')); // Howdy, Alonzo!