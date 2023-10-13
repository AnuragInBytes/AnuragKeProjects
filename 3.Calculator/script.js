let calculation = localStorage.getItem('calculation') || '';

function makeButton(str){
    calculation += str;
    document.querySelector('.js-calcDisplay').innerHTML = `${calculation}`;
}

function saveAnswer(){
    localStorage.setItem('calculation',calculation);
}