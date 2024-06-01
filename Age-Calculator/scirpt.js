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
    let d1 = todayDate.getDate();
    let m1 = todayDate.getMonth() + 1;
    let y1 = todayDate.getFullYear();

    const dob = new Date(dateInput.value);
    let d2 = dob.getDate();
    let m2 = dob.getMonth() + 1;
    let y2 = dob.getFullYear();

    let monthCarry = 30;
    if(m1===1 || m1===3 || m1 === 5 || m1 === 7 || m1=== 8 || m1 === 10 || m1 === 12){
        monthCarry = 31;
    } else if(m1 === 2){
        monthCarry === 28;
    }
    if(d1<d2){
        d1 += monthCarry;
        m1 -= 1;
    } 
    if(m1<m2){
        y1 -= 1;
        m1 += 12;
    }
    let d3 = d1 - d2;
    let m3 = m1 - m2;
    let y3 = y1 - y2;

    const clock = setInterval(() => {
        const minute = new Date().getMinutes();
        const hour = new Date().getHours();
        const seconds = new Date().getSeconds();
        const time = `${hour} hours, ${minute} minutes and ${seconds} seconds`;


        result.innerHTML = `You are ${y3} years, ${m3} months, ${d3} days, ${time} old...`;
        
    }, 1000);

    calcBtn.classList.add('clearInterval');
    document.querySelector('.clearInterval').addEventListener('click', () => {
        clearInterval(clock);
    })

});