type DocKeys = Extract<keyof Document, `query${string}`>;
type KeyFilteredDoc = {
    [Key in DocKeys]: Document[Key];
};
type ValueFilteredDoc = {
    [Key in keyof Document]: Document[Key] extends (...args: any[]) => HTMLElement | HTMLElement[] ? Document[Key] : never;
};
declare function loadUp(doc: ValueFilteredDoc): void;
type FilteredKeys<Type, Value> = {
    [Key in keyof Type]: Type[Key] extends Value ? Key : never;
}[keyof Type] & keyof Type;
type ElementFunction = (...args: any[]) => Element | Element[];
type RelevantDocumentKeys = FilteredKeys<Document, ElementFunction>;
type ValueFilteredDocument = Pick<Document, RelevantDocumentKeys>;
declare function loadUp2(doc: ValueFilteredDocument): void;
interface Color {
    red: string;
    green: number;
    blue: string;
}
type RelevantColorKeys = FilteredKeys<Color, number>;
//# sourceMappingURL=13-filtering_properties.d.ts.map