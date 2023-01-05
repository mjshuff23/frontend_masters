"use strict";
// Extract and Exclude
//  There are several types that are broadly useful enough to be included in the
//  standard library.  These are called `utility types` and they are built on
//  top of conditional types.  We have Extract and Exclude, which are used to
//  extract or exclude types from a union type
const objColor = { red: 5 };
const anotherObjColor = { red: 5 }; // FavoriteColors
