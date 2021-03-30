const  year = document.getElementById('year');
const month = document.getElementById('month');
const date = document.getElementById('date');
const btn = document.getElementById('btn');
const dayOutput = document.querySelector('.day');

const removeLetters = () => {
const number = /[^0-9]/gi;
year.value = year.value.replace(number, '');
date.value = date.value.replace(number, '');
}

year.addEventListener('input', () => removeLetters());

date.addEventListener('input',() => removeLetters());

const outputDay = (day) => {
    dayOutput.innerHTML = `
    <h1>${day}</h1>
    `
    dayOutput.style.color = 'rgb(25, 223, 124)';
    dayOutput.style.backgroundColor = 'yellow';
    dayOutput.style.textAlign = 'center';
    dayOutput.style.padding = 'auto';
    dayOutput.style.width = '50%';
    dayOutput.style.height = '50px';
    dayOutput.style.position = 'relative';
    dayOutput.style.left = '23%';
    dayOutput.style.margin = '20px';
    dayOutput.style.fontSize = '20px';
}

const validateMessage = (message) => {
    dayOutput.innerHTML = `
    <h1>${message}</h1>
    `;

    dayOutput.style.color = 'rgb(255, 65, 65)';
    dayOutput.style.backgroundColor = 'yellow';
    dayOutput.style.textAlign = 'center';
    dayOutput.style.padding = 'auto';
    dayOutput.style.width = '50%';
    dayOutput.style.height = '50px';
    dayOutput.style.position = 'relative';
    dayOutput.style.left = '23%';
    dayOutput.style.margin = '20px';
    dayOutput.style.fontSize = '20px';
}

const computeDay = (yearCode) => {
    let monthCode;
    if(month.value === 'January' && year.value % 4 !== 0){
        monthCode = 6;
    }else if(month.value === 'January' && year.value % 4 === 0){
        monthCode = 5;
    }else if(month.value === 'February' && year.value % 4 !== 0){
        monthCode = 2;
    }else if(month.value === 'February' && year.value % 4 === 0){
        monthCode = 1;
    }else if(month.value === 'March'){
        monthCode = 2;
    }else if(month.value === 'April'){
        monthCode = 5;
    }else if(month.value === 'May'){
        monthCode = 0;
    }else if(month.value === 'June'){
        monthCode = 3;
    }else if(month.value === 'July'){
        monthCode = 5;
    }else if(month.value === 'August'){
        monthCode = 1;
    }else if(month.value === 'September'){
        monthCode = 4;
    }else if(month.value === 'October'){
        monthCode = 6;
    }else if(month.value === 'November'){
        monthCode = 2;
    }else if(month.value === 'December'){
        monthCode = 4;
    }
    
    const dayInt = monthCode + parseInt(date.value) + yearCode; 

    if(dayInt % 7 === 0){
        const day = 'Sunday';
        outputDay(day);
    }else if(dayInt % 7 === 1){
        const day = 'Monday';
        outputDay(day);
    }else if(dayInt % 7 === 2){
        const day = 'Tuesday';
        outputDay(day);
    }else if(dayInt % 7 === 3){
        const day = 'Wednesday';
        outputDay(day);
    }else if(dayInt % 7 === 4){
        const day = 'Thursday';
        outputDay(day);
    }else if(dayInt % 7 === 5){
        const day = 'Friday';
        outputDay(day);
    }else if(dayInt % 7 === 6){
        const day = 'Saturday';
        outputDay(day);
    }
}

const computeYearCode = () => {
    if(year.value === '' || date.value === ''){
        validateMessage('Please enter all fields');
        setTimeout(() => {
            dayOutput.innerHTML = ''
            dayOutput.style = '';
        }, 2000);
    }else{
        const lastTwo = parseInt(year.value.slice(2));
        const by4 = Math.floor(lastTwo/4);
        const add = lastTwo+by4;
        let yearCode = add % 7;

        if(parseInt(year.value.slice(0, 2)) % 4 === 0){
            yearCode += 0;
        }else if(parseInt(year.value.slice(0, 2)) % 4 === 1){
            yearCode += 5;
        }else if(parseInt(year.value.slice(0, 2)) % 4 === 2){
            yearCode += 3;
        }else if(parseInt(year.value.slice(0, 2)) % 4 === 3){
            yearCode += 1;
        }

        computeDay(yearCode);
    }
    
}

btn.addEventListener('click', () => {
computeYearCode();
});