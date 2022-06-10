'use strict';

let starTree = '';
let leftSide = 5;
const hightTree = 7;

for (let i = 0; i < hightTree; i++) {

    for (let k = 0; k <= leftSide; k++) {
        if (k <= leftSide - i) {
            starTree += ' ';
        } else {
            starTree += '*';
        }
    }

    for (let j = 0; j <= i; j++) {
        starTree += '*';
    }
    
    starTree += '\n';
}

console.log(starTree);

// example

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {

//     for (let k = 0; k <= lines-1; k++) {
//         k + 1 <= (lines - i) ? result += ' ' : result += '*';
//     }

//     for (let j = 0; j <= i; j++) {
//         result += '*';
//     }
    
//     result += '\n';
// }

// console.log(result);


for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);