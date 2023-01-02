// const Fruit = {
//   name: 'banana',
//   mass: 120,
//   color: 'yellow',
// }
class Fruit {
    static createBanana() {
        return { name: 'banana', mass: 120, color: 'yellow' };
    }
}
(function (Fruit) {
    function createFruit() {
        return Fruit.createBanana();
    }
})(Fruit || (Fruit = {}));
// Let's coin a term here and call `banana` and `Fruit` both `identifiers`, in
//  that they provide a named reference to some information (be it value | type)
// Stacking Multiple Things on an Identifier
//  It may seem silly, but what if we renamed `banana` to `Fruit`?
//  They are now stacked.  In fact, we can stack a third thing on top of them
//  called a `namespace` (which we will learn about later)
export { Fruit };
