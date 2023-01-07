type TheDict<T> = {
    [K: string]: T;
};
declare const d: TheDict<string[]>;
type TheDict2<T> = {
    [K: string]: T | undefined;
};
declare const d2: TheDict2<string[]>;
//# sourceMappingURL=08-checked_index_access.d.ts.map