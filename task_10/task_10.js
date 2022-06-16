'use strict';

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age, skills : {languages}} = plan;
        let str = languages.toString();

        // const {age} = plan;
        // const {languages} = plan.skills;
        // let str = `Мне ${age} и я владею языками: `;

        // languages.forEach(function(lang) {
        //     str += `${lang.toUpperCase()} `;
        // });

        // return str;

        return `Мне ${age} и я владею языками: ${str.replace(',', ' ').toUpperCase()} `;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    let {skills : {exp}} = plan;
    //const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let {skills : {programmingLangs : {js, php}}} = plan;

    // let str = '';
    // const {programmingLangs} = plan.skills;
    // for (let key in programmingLangs) {
    //     str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    // }

    // return str;

    return `Язык js изучен на ${js}\nЯзык php изучен на ${php}\nЯзык ruby изучен на 30%\n`;
}

showProgrammingLangs(personalPlanPeter);