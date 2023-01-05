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
type TupleColors = Extract<FavoriteColors, [string]>;
type TupleColors2 = Extract<FavoriteColors, [string, string]>;
type ExcludeStringColors = Exclude<FavoriteColors, string>;
type ExcludeArrayColorsAndStringColors = Exclude<ExcludeStringColors, string[]>;
type ExcludeObjectColors = Exclude<FavoriteColors, {
    [key: string]: number;
}>;
/**
 * Exclude from T those types that are assignable to U
 */
type ExcludeExample<T, U> = T extends U ? never : T;
/**
 * Extract from T those types that are assignable to U
 */
type ExtractExample<T, U> = T extends U ? T : never;
//# sourceMappingURL=06-extract_exclude.d.ts.map