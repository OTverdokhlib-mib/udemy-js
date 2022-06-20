'use strict';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let studentsGroups = [], restStudents = [];
    const quantityGroups = Math.floor(arr.length / 3);
    let q = 1;

    arr.sort();

    for (let i = 0; i < quantityGroups; i++) {
        studentsGroups[i] = [];
    }

    for (let i = 0; i < arr.length; i++) {
        if (i + 1 > q * 3 && q < quantityGroups) { q++; }

        i < q * quantityGroups ? studentsGroups[q - 1].push(arr[i]): restStudents.push(arr[i]);
    }

    studentsGroups.push(`Оставшиеся студенты: ${restStudents.length === 0 ? '-' : restStudents.join(', ')}`);
    return studentsGroups;
}

sortStudentsByGroups(students);