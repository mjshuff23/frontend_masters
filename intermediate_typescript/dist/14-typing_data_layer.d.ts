declare class Book {
    author: string;
    constructor(author: string);
}
declare class Movie {
    director: string;
    constructor(director: string);
}
declare class Song {
    artist: string;
    constructor(artist: string);
}
declare class Store {
    get(): void;
    getAll(): void;
    create(): void;
    update(): void;
}
declare const store: Store;
//# sourceMappingURL=14-typing_data_layer.d.ts.map