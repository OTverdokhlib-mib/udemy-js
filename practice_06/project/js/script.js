/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv > *'),
          genre = document.querySelector('.promo__genre'),
          bg = document.querySelector('.promo__bg'),
          interactiveList = document.querySelector('.promo__interactive-list');
    
    // 1 >
    
    adv.forEach(item => {
        item.remove();
    });
    
    // 2 >
    
    genre.textContent = 'драма';
    
    // 3 >
    
    bg.style.backgroundImage = "url('img/bg.jpg')";
    
    // 4 >
    
    interactiveList.innerHTML = '';
    
    movieDB.movies.sort();
    
    movieDB.movies.forEach(item => {
        interactiveList.innerHTML += `
            <li class="promo__interactive-item">${item}
                <div class="delete"></div>
            </li>
            <div class="delete"></div>`;
    });
    
    // 5 >
    
    interactiveList.style.listStyleType = 'decimal';


/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

    const   addForm = document.querySelector('form.add'),
            addFormInput = addForm.querySelector('.adding__input'),
            addFormCheckbox = addForm.querySelector('[type="checkbox"]');

    

    let renderMoviesList = (films, place) => {
        place.innerHTML = '';
        films.sort();

        films.forEach(item => {
            place.innerHTML += `
                <li class="promo__interactive-item">${item}
                    <div class="delete"></div>
                </li>
                <div class="delete"></div>`;
        });

        interactiveList.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.slice(i, 1);
            });
        });
    };

    renderMoviesList(movieDB.movies, interactiveList);

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addFormInput.value,
            faforite = addFormCheckbox.checked;
        
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (faforite) {
                console.log('Любимый фильм');
            }

            movieDB.movies.push(newFilm);
            renderMoviesList(movieDB.movies, interactiveList);
        }

        e.target.reset();
    });
});