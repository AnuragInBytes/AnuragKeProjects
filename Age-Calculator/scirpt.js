// Disabling future dates from calendar 

const today = new Date().toISOString().split('T')[0];
// console.log(today);
const dateInput = document.getElementById('js-input-date');
dateInput.setAttribute("max", today);

const result = document.querySelector('.result-field');
const calcBtn = document.querySelector('.cal');


calcBtn.addEventListener('click', () => {
    // console.log(dateInput.value);
    const todayDate = new Date();
    const d1 = todayDate.getDate();
    const m1 = todayDate.getMonth() + 1;
    const y1 = todayDate.getFullYear();

    const dob = new Date(dateInput.value);
    const d2 = dob.getDate();
    const m2 = dob.getMonth() + 1;
    const y2 = dob.getFullYear();

    const d3 = d1 - d2;
    const m3 = m1 - m2;
    const y3 = y1 - y2;

    const clock = setInterval(() => {
        const minute = new Date().getMinutes();
        const hour = new Date().getHours();
        const seconds = new Date().getSeconds();
        const time = `${hour} hours, ${minute} minues and ${seconds} seconds`;


        result.innerHTML = `You are ${y3} years, ${m3} months, ${d3} days, ${time} old...`;
        
    }, 1000);

    calcBtn.classList.add('clearInterval');
    document.querySelector('.clearInterval').addEventListener('click', () => {
        clearInterval(clock);
    })

});