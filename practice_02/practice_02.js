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

for (let i = 0; i < personalMoviesDB.count; i++) {
    let movie = prompt('Один из последних просмотренных фильмов?', ''),
        movieRating = +prompt('На сколько оцените его?', '');

    if (movie != null && movie != '' && movie.length < 50 && movieRating != null && movieRating != '') {
        personalMoviesDB.movies[movie] = movieRating;
    } else {
        i--;
    }
}

// let count = 0;

// while (count < personalMoviesDB.count) {
//     let movie = prompt('Один из последних просмотренных фильмов?', ''),
//         movieRating = +prompt('На сколько оцените его?', '');

//     if (movie === '' && movie.length > 50 && movieRating === '') {
//         movie = prompt('Один из последних просмотренных фильмов?', '');
//         movieRating = +prompt('На сколько оцените его?', '');
//     } else {
//         personalMoviesDB.movies[movie] = movieRating;
//     }
// }

if (personalMoviesDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMoviesDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMoviesDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMoviesDB);