'use strict';

function firstTask() {
    let ft = 5;

    while (ft <= 10) {
        console.log(ft);
        ft++;
    }
}

firstTask();


function secondTask() {
    let st = 20;

    for (let i = 0; i <= 10; i++) {
        console.log(st);
        st--;
        if (st === 13) {
            break;
        }
    }

    // for (let i = 20; i >= 10; i--) {
    //     if (i === 13) break;
    //     console.log(i)
    // }
}

secondTask();


function thirdTask() {
    let tt = 0;

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 2; j++) {
            tt++;
        }
        console.log(tt);
    }

    // for (let i = 2; i <= 10; i++) {
    //     if (i % 2 === 0) {
    //         console.log(i);
    //     }
    // }
}

thirdTask();


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2;

    while (i < 16) {
        if (i % 2 !== 0) {
            console.log(i);
        }
        i++;
    }

    // while (i <= 16) {
    //     if (i % 2 === 0) {
    //         i++;
    //         continue;
    //     } else {
    //         console.log(i);
    //     }
    //     i++;
    // }
}

fourthTask();


function fifthTask() {
    const arrayOfNumbers = [];

    let arr = 5;

    for (let i = 0; i <= 5; i++) {
        arrayOfNumbers[i] = arr;
        arr++;
    }

    // for (let i = 5; i < 11; i++) {
    //     arrayOfNumbers[i - 5] = i;
    // }

    // console.log(arrayOfNumbers);
    
    return arrayOfNumbers;
}

fifthTask();