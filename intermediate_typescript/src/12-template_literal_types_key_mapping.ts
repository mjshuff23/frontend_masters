// Template Literal Types & Key Mapping

// Template Literal Types
type ArtFeatures = "cabin" | "tree" | "sunset";
type Colors = "red" | "blue" | "green";

// We can use the exact same syntax that one would find in an ES6 template
//  literal, but in a type expression instead of a value expression, to create
//  a new type that represents every possible combination of these two types.
type ArtMethodNames = `paint_${Colors}_${ArtFeatures}`;

//  While something like "paint_red_cabin" is a valid name of a class method in 
//   JS or TS, it's more conventional to use camelCase for method names.
//  TypeScript provides a few special types you can use within these template 
//   literal Types: Uppercase, Lowercase, Capitalize, and Uncapitalize.
type JSArtMethodNames = `paint${Capitalize<Colors>}${Capitalize<ArtFeatures>}`

//  Now let's bring this back into the world of Mapped Types, to perform some
//   key mapping, where the resultant Mapped Type has different property names
//   than the type being "iterated over".  Note the use of the `as` keyword to
//   rename the key.

interface DataState {
  digits: number[];
  names: string[];
  // We are saying flags can have the properties "darkMode" and "mobile", and
  //  that the value of those properties must be a boolean.
  flags: Record<"darkMode" | "mobile", boolean>;
}

const dataStateExample: DataState = {
  digits: [1, 2, 3],
  names: ["a", "b", "c"],
  flags: {
    darkMode: true,
    mobile: false
  }
}

type DataSDK = {
  // The mapped type
  [Key in keyof DataState as `set${Capitalize<Key>}`]: (arg: DataState[Key]) => void;
  // This is the same as:
  // setDigits: (arg: number[]) => void;
  // setNames: (arg: string[]) => void;
}

function load(dataSDK: DataSDK) {
  dataSDK.setDigits([14]);
  dataSDK.setNames(["d", "e", "f"]);
  dataSDK.setFlags({ darkMode: false, mobile: true });
}