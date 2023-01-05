"use strict";
// Inference with Conditional Types
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#inference-with-conditional-types
//  Conditional types are not just for switching behavior based on comparison,
//   they can be used with an 'infer' keyword to infer a type from a conditional
//   type.  This is useful for extracting the type of a function's return value
//   or the type of a property on an object.
// The 'infer' keyword can only be used in the context of a conditional
//  expression.
// Motivating Use Case
// A class whose constructor wants a complicated options object, but doesn't
//  export the type for this object as an interface or type alias
class WebpackCompiler {
    constructor(options) {
        // ...
    }
}
///////// In our own code
const cfg = {
    entry: 'src/index.ts',
    wutch: true, // SPELLING ERROR
};
try {
    const compiler = new WebpackCompiler(cfg);
}
catch (error) {
    throw new Error(`Problem compiling with config\n${JSON.stringify(cfg, null, 2)}`);
}
// We want to pull out the options type from the constructor so we can do
//  something like this: const cfg: WebpackCompilerOptions = { ... }
//  this is where infer comes in
// Infer lets us extract and obtain type information from larger types
//  - Let's simplify the problem:
class FruitStand {
    constructor(fruitNames) {
        // ...
    }
}
// Let's break this type down:
// -  type ConstructorArg<Type> = Type extends: We're saying that we want to
//     create a type that depends on the type that we pass in
// - { new (arg: infer A, ...args: any[]): any; }: We're saying that we want
//     to create a type that depends on the type that we pass in, and that
//     type must have a constructor that takes an argument of type A, and
//     that A is the type we want to extract.  The spread operator is used
//     to say that we don't care about the other arguments
let fruits;
// more realistic example
let compilerOptions = {
    entry: 'src/index.ts',
    watch: true, // SPELLING ERROR
};
const compiler = new WebpackCompiler(compilerOptions);
let dateFirst;
let promiseFirst;
let webpackCfg;
