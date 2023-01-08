declare let age: number;
declare const vector3: [number, number, number];
declare abstract class PersonType {
    abstract name: string;
}
type ColorEx = {
    red: number;
    green: number;
    blue: number;
};
declare class ColorValue implements ColorEx {
    red: number;
    green: number;
    blue: number;
    constructor(red: number, green: number, blue: number);
}
declare enum Editor {
    SublimeText = 0,
    VSCode = "vscode"
}
declare enum Linter {
    ESLint = 0,
    TSLint = "tslint",
    JSLint = 3,
    JSHint = 4
}
declare class Person13 {
    #private;
    constructor(name: string);
}
declare function makeName(name: string | string[]): string;
declare class Student13 extends Person13 {
    #private;
    constructor(name: string | string[]);
}
//# sourceMappingURL=10-will_it_compile.d.ts.map