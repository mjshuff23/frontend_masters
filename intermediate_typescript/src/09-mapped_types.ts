// Mapped Types
import { Fruit } from './01-declaration_merging';
// Mapped types are a way to create new types based on old types.  It's kind of
//  like array.map() for types.  It's a way to transform types.
// This is one of the most powerful tools for transforming types in TypeScript.

// The Basics
// If you recall, the concept of index signatures allow specification of some
//  value type for an arbitrary key.  They're the foundation for dictionary
//  types in TypeScript
type DictionaryExample<Type> = { [key: string]: Type }; // <-- index signature

const fruitCatalog: DictionaryExample<Fruit> = {};
fruitCatalog.apple

// What if we didn't want just any key to be used to store fruits in our
//  fruitCatalog object, but a specific subset of keys?  We could use a
//  mapped type to do this.

// You could do this with a map type.  We'll stop calling our collection a
//  Dictionary, since that would imply that we could still use arbitrary
//  keys.  We'll call this a Record instead.  How about MyRecord

type FruitKeys = 'apple' | 'banana' | 'orange';
type FruitCatalog = { [key in FruitKeys]: Fruit };

type MyRecord = { [FruitKey in FruitKeys]: Fruit };
// Think of FruitKeys as what you're mapping over, and think of FruitKey as your
//  i variable in a for loop.  The type of FruitKey is the type of the key in
//  the resulting object.  The type of the value is the type of the value in
//  the resulting object.

function printFruitCatalog(fruitCatalog: MyRecord) {
  fruitCatalog.apple;
  fruitCatalog.banana;
  // fruitCatalog.pineapple; // <-- error
}

// The thing that looks like an index signature is actually a mapped type.
// Index signatures can be on all strings, or all numbers, or all symbols, but

// Let's make our Record Type a bit more generic
type MyRecordNew<KeyType extends keyof any, ValueType> = { [Key in KeyType]: ValueType}
