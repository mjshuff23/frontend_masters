// Pick and Mapping Modifiers
// We've created another built-in utility type called `Pick`.
// Let's extract Window away from this
type Picky<ValueType, Keys extends keyof ValueType> = {
  [Key in Keys]: ValueType[Key]
}

/**
 * From T, pick a set of properties whose keys are in the union K
 */
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P]
// }

// Mapping Modifiers
// We can also use the `readonly` and `?` modifiers with mapped types.
// We can use the `readonly` modifier to make all properties in a type readonly.
// If there's a - to the left of readonly or ?, it indicates the removal of that
//  modifier.

/**
 * Make all properties in Type optional
 */
type Optional<Type> = {
  [Key in keyof Type]?: Type[Key]
}

/**
 * Make all properties in Type required
 */
type Reqd<Type> = {
  [Key in keyof Type]-?: Type[Key]
}

/**
 * Make all properties in Type readonly
 */
type ReadOnly<Type> = {
  readonly [Key in keyof Type]: Type[Key]
}

// There is no built-in type for the removal of readonly, but we can create one
type NotReadOnly<Type> = {
  -readonly [ Key in keyof Type]: Type[Key]
}