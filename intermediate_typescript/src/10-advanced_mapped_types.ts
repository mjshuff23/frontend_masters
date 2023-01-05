// Advanced Mapped Types
// Use with indexed access types
//  Mapped types work beautifully with indexed access types, because the index
//  can be used when defining the value type

type PartOfWindow = {
  [Key in 
    | 'document'
    | 'navigator'
    | 'setTimeout']: Window[Key]
} 
// What we've done here is create a type that has the same keys as Window, but
//  the values are the types of the values in Window.  This is a great way to
//  create a type that is a subset of another type.
const myWindow: PartOfWindow = new Window();
myWindow.document;
// myWindow.location; // <-- error

// Let's make this a little more generalized through the use of type parameters.
//  First, we should let the caller define which keys they'd like to use.  We'll
//  call this type `PickWindowProperties` because we get to specify which things
//  we want to pick from Window.
type PickWindowProperties<Keys extends keyof Window> = {
  [Key in Keys]: Window[Key]
}

type PartOfWindow2 = PickWindowProperties<"document" | "navigator" | "setTimeout">;
// type PartOfWindow2 = PickWindowProperties<"document" | "navigator" | "setTimeout" | "test">; // <-- error

// Let's extract Window away from this
type PickProperties<ValueType, Keys extends keyof ValueType> = {
  [Key in Keys]: ValueType[Key]
}

type PartOfWindow3 = PickProperties<Window, "document" | "navigator" | "setTimeout">;

type PartOfDocument = PickProperties<Document, "body" | "cookie" | "createElement">;