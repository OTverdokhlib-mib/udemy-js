'use strict';

// Место для первой задачи
function calculateVolumeAndArea(a) {
    if (typeof(a) == 'number' && Number.isInteger(a) == true && a > 0 ) {
        return `Объем куба: ${a*a*a}, площадь всей поверхности: ${a*a*6}`;
    } else {
        return `При вычислении произошла ошибка`;
    }
}

calculateVolumeAndArea(15);


// Место для второй задачи
function getCoupeNumber(num) {
    if (typeof(num) !== 'number' || !Number.isInteger(num) || num < 0) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if (num >= 1 && num <= 36) {
        return Math.ceil(num / 4);
    } else {
        return 'Таких мест в вагоне не существует';
    }
}

getCoupeNumber(33);