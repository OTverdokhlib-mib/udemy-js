'use strict';

function fib(num) {
    if (typeof(num) === 'number' &&  Number.isInteger(num) && num > 0) {
        let line = '', arr = [];
        for (let i = 0; i < num; i++) {

            // arr.length < 2 ? arr[i] = i : arr[i] = arr[i - 1] + arr[i - 2];

            if (arr.length < 2) {
                arr[i] = i;
            } else {
                arr[i] = arr[i-1] + arr[i-2];
            }

            // i == 0 ? line += `${arr[i]}` :  line += ` ${arr[i]}`;

            if (i == 0) {
                line += `${arr[i]}`;
            } else {
                line += ` ${arr[i]}`;
            }
        }
        return line;
    } else {
        return '';
    }


    // if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
    //     return "";
    // }

    // let result = '';
    // let first = 0;
    // let second = 1;

    // for (let i = 0; i < num; i++) {
    //     if (i + 1 === num) {
    //         result += `${first}`;
    //     } else {
    //         result += `${first} `;
    //     }

    //     let third = first + second;
    //     first = second;
    //     second = third;
    // }

    // return result;
}

fib(5);