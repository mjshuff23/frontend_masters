class Book {
  constructor(public author: string, public title: string) {}
}

class Movie {
  constructor(public director: string) {}
}

class Song {
  constructor(public artist: string) {}
}

interface EntityMap {
  book: Book;
  movie: Movie;
  song: Song;
}



class Store {
  get<P extends keyof EntityMap>(product: P, id: string): EntityMap[P] {}

  getAll<P extends keyof EntityMap>(product: P): EntityMap[P][] {}

  create<P extends keyof EntityMap>(product: P, toCreate: EntityMap[P]): void {}

  update<P extends keyof EntityMap>(product: P, id: string, toUpdate: Partial<EntityMap[P]>) {}
}

const store = new Store();
store.get('book', '123');
store.getAll('book');
store.create('book', { author: 'John', title: 'New Title' });
store.update('book', '123', { author: 'New Title' });

declare module "fem-data" {
  interface EntityMap {
    
  }
}
