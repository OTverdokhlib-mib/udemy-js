'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже пересмотрели', '');

const personalMoviesDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    },
    movie1 = prompt('Один из последних просмотренных фильмов?', ''),
    movieRating1 = +prompt('На сколько оцените его?', ''),
    movie2 = prompt('Один из последних просмотренных фильмов?', ''),
    movieRating2 = +prompt('На сколько оцените его', ''),
    movies = {
        'movie1': 'movieRating1',
        'movie2': 'movieRating2',
    };

personalMoviesDB.movies[movie1] = movieRating1;
personalMoviesDB.movies[movie2] = movieRating2;

console.log(personalMoviesDB);