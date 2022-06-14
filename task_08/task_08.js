'use strict';

// Место для первой задачи
function getTimeFromMinutes(time) {
    if (typeof(time) == 'number' && Number.isInteger(time) && time >= 0) {
        let hours = Math.trunc(time/60),
            minutes = time % 60,
            timeStr = '';

        switch (hours) {
            case 0: 
                timeStr = 'часов';
                break;
            case 1:
                timeStr = 'час';
                break;
            case 2:
            case 3:
            case 4:
                timeStr = 'часа';
                break;
            default:
                timeStr = 'часов';
        }

        return  `Это ${hours} ${timeStr} и ${minutes} минут`;
    } else {
        return 'Ошибка, проверьте данные';
    }
}

getTimeFromMinutes(99);

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    if (typeof(a) === 'number' && typeof(b) === 'number' && typeof(c) === 'number' && typeof(d) === 'number') {
            return Math.max(a, b ,c, d);
    } else {
        return 0;
    }
}

findMaxNumber(1, 5, 6.6, 11);