type Picky<ValueType, Keys extends keyof ValueType> = {
    [Key in Keys]: ValueType[Key];
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
/**
 * Make all properties in Type optional
 */
type Optional<Type> = {
    [Key in keyof Type]?: Type[Key];
};
/**
 * Make all properties in Type required
 */
type Reqd<Type> = {
    [Key in keyof Type]-?: Type[Key];
};
/**
 * Make all properties in Type readonly
 */
type ReadOnly<Type> = {
    readonly [Key in keyof Type]: Type[Key];
};
type NotReadOnly<Type> = {
    -readonly [Key in keyof Type]: Type[Key];
};
//# sourceMappingURL=11-pick_mapping_modifiers.d.ts.map