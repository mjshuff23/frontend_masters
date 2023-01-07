let dict = {};
// A record is essentially a shortcut to a dictionary where the first parameter
//  is the type of the key and the second parameter is the type of the value
dict['3'] = ['a', 'b', 'c'];
dict[1] = ['test'];
function isDefined(x) {
    return typeof x !== 'undefined';
}
export class DataStore {
    #data = {
        movie: {},
        song: {},
        comic: {},
    };
    getAllSongs() {
        // We're using the ! operator to tell TypeScript that we know this value is defined, which is safe here because we're using Object.keys
        return Object.keys(this.#data.song).map((songKey) => this.#data.song[songKey]);
        // When you're unsure the keys exist, you should use the isDefined function
        // return Object.keys(this.#data.song).map((songKey) => this.#data.song[songKey]).filter(isDefined);
    }
    ;
    getSong(songKey) {
        const song = this.#data.song[songKey];
        if (!song) {
            throw new Error(`Song ${songKey} does not exist`);
        }
        return song;
    }
    addSong(song) {
        this.#data.song[song.id] = song;
        return true;
    }
    ;
    clearSongs() {
        this.#data.song = {};
        return true;
    }
    ;
    getAllMovies() {
        return Object.keys(this.#data.movie).map((movieKey) => this.#data.movie[movieKey]);
    }
    ;
    getMovie(id) {
        const movie = this.#data.movie[id];
        if (!movie) {
            throw new Error(`Movie ${id} does not exist`);
        }
        return movie;
    }
    ;
    addMovie(movie) {
        this.#data.movie[movie.id] = movie;
        return true;
    }
    ;
    clearMovies() {
        this.#data.movie = {};
        return true;
    }
    ;
    getAllComics() {
        return Object.keys(this.#data.comic).map((comicKey) => this.#data.comic[comicKey]);
    }
    ;
    getComic(id) {
        const comic = this.#data.comic[id];
        if (!comic) {
            throw new Error(`Comic ${id} does not exist`);
        }
        return comic;
    }
    ;
    addComic(comic) {
        this.#data.comic[comic.id] = comic;
        return true;
    }
    ;
    clearComics() {
        this.#data.comic = {};
        return true;
    }
    ;
}
//  The DataEntityMap should drive a lot of what happens to DataStore
//  Ultimately, DataStore should end up with methods like:
const ds = new DataStore();
ds.addSong({ id: '1', artist: 'The Beatles' });
ds.addMovie({ id: '2', director: 'Steven Spielberg' });
console.log(ds.getAllSongs());
console.log(ds.getSong('1'));
ds.getMovie('2');
console.log(ds.getAllMovies());
console.log(ds.getMovie('2'));
ds.clearSongs();
ds.clearMovies();
console.log(ds.getAllSongs());
try {
    console.log(ds.getSong('1'));
}
catch (err) {
    if (err instanceof Error) {
        console.log(err.message);
    }
    else {
        throw new Error(`${err}`);
    }
}
console.log(ds.getAllMovies());
try {
    console.log(ds.getMovie('2'));
}
catch (err) {
    if (err instanceof Error) {
        console.log(err.message);
    }
    else {
        throw new Error(`${err}`);
    }
}
