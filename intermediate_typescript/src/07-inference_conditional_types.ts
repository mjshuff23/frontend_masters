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
class WebpackCompiler{
  constructor(options: {
    amd?: false | { [index: string]: any };
    bail?: boolean;
    cache?:
      | boolean
      | {
        maxGenerations?: number;
        type: "memory"
      };
    context?: string;
    dependencies?: string[];
    devTool?: string;
    entry?: string;
    chunkLoading?: boolean;
    dependOn?: string[];
    layer?: string;
    runtime?: string;
    wasmLoading?: boolean;
    externalsType?:
      | "var"
      | "this"
      | "commonjs"
      | "commonjs2"
      | "commonjs-module";
    watch?: boolean;
  }){
    // ...
  }
}

///////// In our own code
const cfg = {
  entry: 'src/index.ts',
  wutch: true, // SPELLING ERROR
}
try {
  const compiler = new WebpackCompiler(cfg);
} catch(error) {
  throw new Error(`Problem compiling with config\n${JSON.stringify(cfg, null, 2)}`);
}

// We want to pull out the options type from the constructor so we can do
//  something like this: const cfg: WebpackCompilerOptions = { ... }
//  this is where infer comes in
// Infer lets us extract and obtain type information from larger types
//  - Let's simplify the problem:
class FruitStand {
  constructor(fruitNames: string[]) {
    // ...
  }
}

// What we want is some kind of thing, where FruitStand is our input, and
//  string[] is our output
type ConstructorArg<Type> = Type extends {
  new (arg: infer A, ...args: any[]): any;
} ? A : never;

// To do this with Dates
type ConstructorArg2<Type> = Type extends {
  // if the type we pass in has a constructor that takes an argument of type A
  //  and that A is the type we want to extract and it is a Date, then return
  //  that A, otherwise return never
  new (arg: infer A, ...args: any[]): Date;
} ? A : never;

// Let's break this type down:
// -  type ConstructorArg<Type> = Type extends: We're saying that we want to
//     create a type that depends on the type that we pass in
// - { new (arg: infer A, ...args: any[]): any; }: We're saying that we want
//     to create a type that depends on the type that we pass in, and that
//     type must have a constructor that takes an argument of type A, and
//     that A is the type we want to extract.  The spread operator is used
//     to say that we don't care about the other arguments

let fruits: ConstructorArg<typeof FruitStand>;

// more realistic example
let compilerOptions: ConstructorArg<typeof WebpackCompiler> = {
  entry: 'src/index.ts',
  watch: true, // SPELLING ERROR
};
const compiler = new WebpackCompiler(compilerOptions);

let dateFirst: ConstructorArg<typeof Date>;
let promiseFirst: ConstructorArg<typeof Promise>;
let webpackCfg: ConstructorArg<typeof WebpackCompiler>;