'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже пересмотрели', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже пересмотрели', '');
    }
}

start();

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

function rememberMyFilms() {
    for (let i = 0; i < personalMoviesDB.count; i++) {
        let movie = prompt('Один из последних просмотренных фильмов?', ''),
            movieRating = +prompt('На сколько оцените его?', '');
    
        if (movie != null && movie != '' && movie.length < 50 && movieRating != null && movieRating != '') {
            personalMoviesDB.movies[movie] = movieRating;
        } else {
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMoviesDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMoviesDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();


function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMoviesDB);
    }
}

showMyDB(personalMoviesDB.privat);


function showYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

showYourGenres();