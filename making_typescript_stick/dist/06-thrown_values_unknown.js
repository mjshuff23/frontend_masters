"use strict";
// Thrown values as unknown
try {
    doSomething();
}
catch (err) {
    if (err instanceof Error) {
        throw err;
    }
    else {
        throw new Error(`${err}`);
        // console.log(err);
    }
}
function doSomething() {
    if (Math.random() > 0.5) {
        throw new Error("Something went wrong");
    }
    else {
        throw "Something went wrong";
    }
}
