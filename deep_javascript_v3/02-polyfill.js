// In this exercise, you'll define a polyfill for `Object.is(...)`.
// Polyfill - a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it
//// Instructions ////
// 1. `Object.is(..)` should take two parameters.
// 2. It should return `true` if the passed in parameters are exactly the same value (not just `===` -- see below!), or `false` otherwise.
// 3. For `NaN` testing, you can use `Number.isNaN(..)`, but first see if you can find a way to test without usage of any utility!
// 4. For `-0` testing, no built-in utility exists, but here's a hint: `-Infinity`.
// 5. You cannot use the built-in `Object.is(..)` -- that's cheating!
// 6. If the parameters are any other values, just test them for strict equality
// we add || true to the if statement so that the polyfill will run even if the browser supports Object.is.  This can be done with almost any polyfill.

if (!Object.is || true) {
  Object.is = function ObjectIs(x, y) {
    console.log('Running my polyfill!')
    const isItNegZero = (x) => {
      return x === 0 && (1 / x) === -Infinity;
    };
    const isItNaN = (x) => {
      return x !== x;
    }

    const xNegZero = isItNegZero(x);
    const yNegZero = isItNegZero(y);

    if (xNegZero || yNegZero) {
      return xNegZero && yNegZero;
    } else if (isItNaN(x) && isItNaN(y)) {
      return true;
    } else if (x === y) {
      return true;
    }
    return false;
  }
}

console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);amd