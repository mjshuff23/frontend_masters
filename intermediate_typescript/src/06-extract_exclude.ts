// Extract and Exclude
//  There are several types that are broadly useful enough to be included in the
//  standard library.  These are called `utility types` and they are built on
//  top of conditional types.  We have Extract and Exclude, which are used to
//  extract or exclude types from a union type

// Extract is about defining what you're looking for
// Exclude is about defining what you're looking to exclude

type FavoriteColors = 'red' | 'blue' | 'green' | 'yellow' | 'orange' | ['purple', 'pink'] | { [key: string]: number };

type StringColors = Extract<FavoriteColors, string>;
type ArrayColors = Extract<FavoriteColors, string[]>;
type ObjectColors = Extract<FavoriteColors, { [key: string]: number }>;

const objColor: ObjectColors = { red: 5 };
const anotherObjColor: FavoriteColors = { red: 5 }; // FavoriteColors
type whatType = typeof anotherObjColor;  // { [key: string]: number }