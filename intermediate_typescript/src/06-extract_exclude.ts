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
type TupleColors = Extract<FavoriteColors, [string]>; // never
type TupleColors2 = Extract<FavoriteColors, [string, string]>; // ['purple', 'pink']

type ExcludeStringColors = Exclude<FavoriteColors, string>;
type ExcludeArrayColorsAndStringColors = Exclude<ExcludeStringColors, string[]>;
type ExcludeObjectColors = Exclude<FavoriteColors, { [key: string]: number }>;

// Complete source code for Exclude and Extract:
/**
 * Exclude from T those types that are assignable to U
 */
type ExcludeExample<T, U> = T extends U ? never : T;

/**
 * Extract from T those types that are assignable to U
 */
type ExtractExample<T, U> = T extends U ? T : never;