export interface DataEntity {
    id: string;
}
export interface Movie extends DataEntity {
    director: string;
}
export interface Song extends DataEntity {
    artist: string;
}
export interface Comic extends DataEntity {
    issueNumber: number;
}
export type DataEntityMap = {
    movie: Movie;
    song: Song;
    comic: Comic;
};
type DataStoreMethods = {
    [Key in keyof DataEntityMap as `getAll${Capitalize<Key>}s`]: () => DataEntityMap[Key][];
} & {
    [Key in keyof DataEntityMap as `get${Capitalize<Key>}`]: (id: string) => DataEntityMap[Key];
} & {
    [Key in keyof DataEntityMap as `add${Capitalize<Key>}`]: (entity: DataEntityMap[Key]) => void;
} & {
    [Key in keyof DataEntityMap as `clear${Capitalize<Key>}s`]: () => void;
};
export declare class DataStore implements DataStoreMethods {
    #private;
    getAllSongs(): Song[];
    getSong(songKey: string): Song;
    addSong(song: Song): boolean;
    clearSongs(): boolean;
    getAllMovies(): Movie[];
    getMovie(id: string): Movie;
    addMovie(movie: Movie): boolean;
    clearMovies(): boolean;
    getAllComics(): Comic[];
    getComic(id: string): Comic;
    addComic(comic: Comic): boolean;
    clearComics(): boolean;
}
export {};
//# sourceMappingURL=09-typed_data_store.d.ts.map