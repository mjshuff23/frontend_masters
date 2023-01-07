"use strict";
class Book {
    author;
    constructor(author) {
        this.author = author;
    }
}
class Movie {
    director;
    constructor(director) {
        this.director = director;
    }
}
class Song {
    artist;
    constructor(artist) {
        this.artist = artist;
    }
}
class Store {
    get() { }
    getAll() { }
    create() { }
    update() { }
}
const store = new Store();
store.get('book');
store.getAll('book');
store.create('book', myBook);
store.update('book', '123', { title: 'New Title' });
