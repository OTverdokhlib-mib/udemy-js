'use strict';

// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Антон');


// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);


// Место для третьей задачи
function getMathResult(b, q) {
    let result = '';

    if(typeof(q) === 'string' || q <= 0 || q == null || q == undefined) {
        result = b;
    } else {
        for (let i = 1; i <= q; i++) {
            if (i != q) {
                result += b * i + '---';
            } else {
                result += b * i;
            }
        }
    }
    return result;
}

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }

//     return str;
// }

getMathResult(5, 5);