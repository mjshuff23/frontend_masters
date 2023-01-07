type ArtFeatures = "cabin" | "tree" | "sunset";
type Colors = "red" | "blue" | "green";
type ArtMethodNames = `paint_${Colors}_${ArtFeatures}`;
type JSArtMethodNames = `paint${Capitalize<Colors>}${Capitalize<ArtFeatures>}`;
interface DataState {
    digits: number[];
    names: string[];
    flags: Record<"darkMode" | "mobile", boolean>;
}
declare const dataStateExample: DataState;
type DataSDK = {
    [Key in keyof DataState as `set${Capitalize<Key>}`]: (arg: DataState[Key]) => void;
};
declare function load(dataSDK: DataSDK): void;
//# sourceMappingURL=12-template_literal_types_key_mapping.d.ts.map