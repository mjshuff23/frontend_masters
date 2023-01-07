"use strict";
// Async vs Promise Quiz
function getData() {
    console.log("elephant");
    const p = new Promise((resolve) => {
        console.log("giraffe");
        resolve("lion");
        console.log("zebra");
    });
    console.log("koala");
    return p;
}
async function main() {
    console.log("cat");
    const result = await getData();
    console.log(result);
}
console.log("dog");
main().then(() => {
    console.log("moose");
});
