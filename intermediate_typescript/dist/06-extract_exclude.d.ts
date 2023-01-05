type FavoriteColors = 'red' | 'blue' | 'green' | 'yellow' | 'orange' | ['purple', 'pink'] | {
    [key: string]: number;
};
type StringColors = Extract<FavoriteColors, string>;
type ArrayColors = Extract<FavoriteColors, string[]>;
type ObjectColors = Extract<FavoriteColors, {
    [key: string]: number;
}>;
declare const objColor: ObjectColors;
declare const anotherObjColor: FavoriteColors;
type whatType = typeof anotherObjColor;
//# sourceMappingURL=06-extract_exclude.d.ts.map