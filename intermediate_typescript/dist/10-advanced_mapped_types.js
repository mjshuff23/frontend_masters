"use strict";
// Advanced Mapped Types
// Use with indexed access types
//  Mapped types work beautifully with indexed access types, because the index
//  can be used when defining the value type
// What we've done here is create a type that has the same keys as Window, but
//  the values are the types of the values in Window.  This is a great way to
//  create a type that is a subset of another type.
const myWindow = new Window();
myWindow.document;
