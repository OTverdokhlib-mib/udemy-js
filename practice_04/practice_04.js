'use strict';

let numberOfFilms;

const personalMoviesDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,

        start() {
            numberOfFilms = +prompt('Сколько фильмов вы уже пересмотрели', '');

            while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
                numberOfFilms = +prompt('Сколько фильмов вы уже пересмотрели', '');
            }
        },

        rememberMyFilms() {
            for (let i = 0; i < personalMoviesDB.count; i++) {
                let movie = prompt('Один из последних просмотренных фильмов?', ''),
                    movieRating = +prompt('На сколько оцените его?', '');
            
                if (movie != null && movie != '' && movie.length < 50 && movieRating != null && movieRating != '') {
                    personalMoviesDB.movies[movie] = movieRating;
                } else {
                    i--;
                }
            }
        },

        detectPersonalLevel() {
            if (personalMoviesDB.count < 10) {
                alert('Просмотрено довольно мало фильмов');
            } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
                alert('Вы классический зритель');
            } else if (personalMoviesDB.count >= 30) {
                alert('Вы киноман');
            } else {
                alert('Произошла ошибка');
            }
        },

        showMyDB(hidden) {
            if(!hidden) {
                console.log(personalMoviesDB);
            }
        },

        toggleVisibleMyDB() {
            if(personalMoviesDB.privat) {
                personalMoviesDB.privat = false;
            } else {
                personalMoviesDB.privat = true;
            }
        },

        showYourGenres() {
            for (let i = 1; i <= 3; i++) {
                let favorite = prompt(`Ваш любимый жанр под номером ${i}`, '');

                if (favorite != null && favorite != '') {
                    personalMoviesDB.genres[i - 1] = favorite;
                } else {
                    i--;
                }
            }

            personalMoviesDB.genres.forEach((element, index) => console.log(`Любимый жанр #${index + 1} - это ${element}`));
        }
    };

personalMoviesDB.start();

personalMoviesDB.rememberMyFilms();

personalMoviesDB.detectPersonalLevel();

personalMoviesDB.showMyDB(personalMoviesDB.privat);
personalMoviesDB.toggleVisibleMyDB(personalMoviesDB.privat);

personalMoviesDB.showYourGenres();