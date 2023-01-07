// Template Literals and Key Remapping
type Statistics = {
  [Key in `${"median" | "mean"}Value`]?: number;
}

const stats: Statistics = {
  medianValue: 3.5,
  meanValue: 4.5,
  // average: 10, // Error
}

let winFunctions: Extract<keyof Window, `set${string}`>;

// We've also got utility types for changing case
type T1 = `send${Capitalize<"mouse" | "keyboard">}Event`;
type T2 = `send${Uppercase<"mouse" | "keyboard">}Event`;
type T3 = `send${Lowercase<"Mouse" | "Keyboard">}Event`;
type T4 = `send${Uncapitalize<"MOUSE" | "KEYBOARD">}Event`;

// Key remapping in mapped types, notice the as keyword
type OurColors = "red" | "green" | "blue";
type ColorSelector = {
  [Key in OurColors as `set${Capitalize<Key>}Color`]: () => void;
}

const colorSelector: ColorSelector = {
  setRedColor: () => {},
  setGreenColor: () => {},
  setBlueColor: () => {},
}