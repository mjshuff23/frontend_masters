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

let dict: Record<number, string[]> = {};
// A record is essentially a shortcut to a dictionary where the first parameter
//  is the type of the key and the second parameter is the type of the value
dict['3'] = ['a', 'b', 'c'];
dict[1] = ['test'];

function isDefined<Type>(x: Type | undefined): x is Type {
  return typeof x !== 'undefined';
}

export class DataStore implements DataStoreMethods {
  #data: { [Key in keyof DataEntityMap]: Record<string, DataEntityMap[Key]> } = {
      movie: {},
      song: {},
      comic: {},
  };

  getAllSongs(): Song[] {
    // We're using the ! operator to tell TypeScript that we know this value is defined, which is safe here because we're using Object.keys
    return Object.keys(this.#data.song).map((songKey) => this.#data.song[songKey]!)
    // When you're unsure the keys exist, you should use the isDefined function
    // return Object.keys(this.#data.song).map((songKey) => this.#data.song[songKey]).filter(isDefined);
  };
  getSong(songKey: string): Song {
    const song = this.#data.song[songKey];
    if (!song) {
      throw new Error(`Song ${songKey} does not exist`);
    }
    return song;
  }
  addSong(song: Song): boolean {
    this.#data.song[song.id] = song;
    return true;
  };
  clearSongs(): boolean {
    this.#data.song = {};
    return true;
  };

  getAllMovies(): Movie[] {
    return Object.keys(this.#data.movie).map((movieKey) => this.#data.movie[movieKey]!)
  };
  getMovie(id: string): Movie {
    const movie = this.#data.movie[id];
    if (!movie) {
      throw new Error(`Movie ${id} does not exist`);
    }
    return movie;
  };
  addMovie(movie: Movie): boolean {
    this.#data.movie[movie.id] = movie;
    return true;
  };
  clearMovies(): boolean {
    this.#data.movie = {};
    return true;
  };

  getAllComics(): Comic[] {
    return Object.keys(this.#data.comic).map((comicKey) => this.#data.comic[comicKey]!)
  };
  getComic(id: string): Comic {
    const comic = this.#data.comic[id];
    if (!comic) {
      throw new Error(`Comic ${id} does not exist`);
    }
    return comic;
  };
  addComic(comic: Comic): boolean {
    this.#data.comic[comic.id] = comic;
    return true;
  };
  clearComics(): boolean {
    this.#data.comic = {};
    return true;
  };
}

//  The DataEntityMap should drive a lot of what happens to DataStore
//  Ultimately, DataStore should end up with methods like:
const ds: DataStore = new DataStore();



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
} catch (err: unknown) {
  if (err instanceof Error) {
    console.log(err.message);
  } else {
    throw new Error(`${err}`)
  }
}

console.log(ds.getAllMovies());

try {
  console.log(ds.getMovie('2'));
} catch (err) {
  if (err instanceof Error) {
    console.log(err.message);
  } else {
    throw new Error(`${err}`)
  }
}
