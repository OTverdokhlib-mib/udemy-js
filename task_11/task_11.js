'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = arr.join(' ');

    if (str === '') {
        return 'Семья пуста';
    } else {
        return `Семья состоит из: ${str} `;
    }

    // let str = '';

    // arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    // arr.forEach(member => {
    //     str += `${member} `
    // });

    // return str;
}

showFamily(family);


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let str = arr.join('\n');

    console.log(str.toLowerCase());

    // arr.forEach(city => {
    //     console.log(city.toLowerCase())
    // })
}

standardizeStrings(favoriteCities);