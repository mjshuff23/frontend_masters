type Statistics = {
    [Key in `${"median" | "mean"}Value`]?: number;
};
declare const stats: Statistics;
declare let winFunctions: Extract<keyof Window, `set${string}`>;
type T1 = `send${Capitalize<"mouse" | "keyboard">}Event`;
type T2 = `send${Uppercase<"mouse" | "keyboard">}Event`;
type T3 = `send${Lowercase<"Mouse" | "Keyboard">}Event`;
type T4 = `send${Uncapitalize<"MOUSE" | "KEYBOARD">}Event`;
type OurColors = "red" | "green" | "blue";
type ColorSelector = {
    [Key in OurColors as `set${Capitalize<Key>}Color`]: () => void;
};
declare const colorSelector: ColorSelector;
//# sourceMappingURL=07-template_literal_key_remapping.d.ts.map