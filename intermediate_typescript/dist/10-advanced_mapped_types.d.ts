type PartOfWindow = {
    [Key in 'document' | 'navigator' | 'setTimeout']: Window[Key];
};
declare const myWindow: PartOfWindow;
type PickWindowProperties<Keys extends keyof Window> = {
    [Key in Keys]: Window[Key];
};
type PartOfWindow2 = PickWindowProperties<"document" | "navigator" | "setTimeout">;
type PickProperties<ValueType, Keys extends keyof ValueType> = {
    [Key in Keys]: ValueType[Key];
};
type PartOfWindow3 = PickProperties<Window, "document" | "navigator" | "setTimeout">;
type PartOfDocument = PickProperties<Document, "body" | "cookie" | "createElement">;
//# sourceMappingURL=10-advanced_mapped_types.d.ts.map