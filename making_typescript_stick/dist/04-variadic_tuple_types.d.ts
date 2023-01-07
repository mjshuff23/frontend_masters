type Color = [
    number,
    number,
    number
];
declare enum Sandwich {
    BLT = 0,
    PBJ = 1,
    Turkey = 2,
    Hamburger = 3,
    VeggieBurger = 4
}
type SandwichOrder = [
    number,
    Sandwich,
    ...string[]
];
declare const order1: SandwichOrder;
declare const order2: SandwichOrder;
type MyTuple<Type> = [number, ...Type[]];
declare const tuple1: MyTuple<string>;
declare const tuple2: MyTuple<number>;
/**
 * Return an array containing everything except the first element
 */
declare function tail<Type extends any[]>(arg: readonly [number, ...Type]): [...Type];
declare const orderWithoutPrice: [Sandwich, ...string[]];
declare function returnArray<Type extends any[]>(arg: Type): Type;
declare const array1: [Sandwich.BLT, "lettuce"];
declare const result: [Sandwich.BLT, "lettuce"];
type MyNewTuple = [
    ...[number, number],
    ...[string, string, string]
];
declare const x: MyNewTuple;
type YESCompile1 = [...[number, number], ...string[]];
type YESCompile2 = [boolean, ...number[], string];
//# sourceMappingURL=04-variadic_tuple_types.d.ts.map