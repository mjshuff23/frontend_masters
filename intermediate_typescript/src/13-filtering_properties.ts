// Filtering Properties Out

// We've already seen how we could filter properties out of a Mapped Type,
//   if the filter condition is based on the key.

// Here's an example using Extract and a template literal type to filter for
//  for only those member of window.document that begin with 'query':
type DocKeys = Extract<keyof Document, `query${string}`>
type KeyFilteredDoc = { 
  [Key in DocKeys]: Document[Key]
}

// What if we want to filter based on the value?
//  For example, what if we want the things on the document that are functions
//  that return an element or element list?
//  First, let's try using never and conditional types
//  We'll set the type of the value to 'never' whenever we want to skip it.
//  This is going to leave us with a type that still has 100% of the keys that
//  Document has, with many many values of 'never'
 type ValueFilteredDoc = { 
  [Key in keyof Document]: Document[Key] extends ( ...args: any[] ) => HTMLElement | HTMLElement[] ? Document[Key] : never
 }

 function loadUp(doc: ValueFilteredDoc) {
  doc.querySelector('input');
 }

 // A better approach is to filter the keys first, and then use the filtered
 // keys to build the mapped type
 // Get keys of Type who values are assignable to Type U
 type FilteredKeys<Type, Value> = {
  [Key in keyof Type]: Type[Key] extends Value ? Key : never
 }[keyof Type] & keyof Type;

 type ElementFunction = (...args: any[]) => Element | Element[];

 type RelevantDocumentKeys = FilteredKeys<Document, ElementFunction>;

 type ValueFilteredDocument = Pick<Document, RelevantDocumentKeys>;

 
 function loadUp2(doc: ValueFilteredDocument) {
  doc.querySelector('input');
 }

 interface Color {
  red: string;
  green: number;
  blue: string;
 }

 type RelevantColorKeys = FilteredKeys<Color, number>;