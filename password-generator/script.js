const inputPass = document.querySelector('#passwordBox');
const copyBtn = document.querySelector('.copyBtn');
const regenBtn = document.querySelector('.regenBtn');
const slider = document.querySelector('#length-slider');
const lengthDisplay = document.getElementById('length-display');
const imageBox = document.querySelector('.image-box');
const popup = document.querySelector('.pop-up');
const remark = document.querySelector('.status');

const capital = document.getElementById('capital');
const small = document.getElementById('small');
const numeric = document.getElementById('numeric');
const special = document.getElementById('special');

const checkboxs = document.querySelectorAll('input[type="checkbox"]');



function checkboxPass(){
    let checkedCheckboxs = document.querySelectorAll('input[type="checkbox"]:checked');
    if(checkedCheckboxs.length===1){
        checkedCheckboxs[0].disabled = true;
    }
    else{
        for(let i = 0; i<checkboxs.length; i++){
            checkboxs[i].disabled = false;
        }
    }
}

function generateRandomPassword(){

    checkboxPass();

    capital.value = (!capital.checked)?null:'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    small.value = (!small.checked)?null:'abcdefghijklmnoprstuvwxyz';
    numeric.value = (!numeric.checked)?null:'0123456789';
    special.value = (!special.checked)?null:'!@#$%^&*()_+=';
    const passwordLength = slider.value;
    lengthDisplay.textContent = slider.value;

    // checkboxPass();

    let password = '';
    const string = capital.value + small.value + numeric.value + special.value;
    for(let i = 0; i<passwordLength; i++){
        const char = Math.floor(Math.random()*string.length);
        password += string.charAt(char);
        inputPass.value = password;
    }

    if(slider.value<=4){
        imageBox.innerHTML = `<img src="download (1).png" alt="">`;
        remark.classList.remove('blue', 'yellow', 'orange', 'green');
        remark.classList.add('red');
        remark.textContent = 'Very Weak';
    } else if(slider.value>4 && slider.value<8){
        imageBox.innerHTML = `<img src="download (2).png" alt="">`;
        remark.classList.remove('blue', 'yellow', 'green', 'red');
        remark.classList.add('orange');
        remark.textContent = 'Weak';
    } else if(slider.value>=8 && slider.value<10){
        imageBox.innerHTML = `<img src="download (3).png" alt="">`;
        remark.classList.remove('blue', 'green', 'orange', 'red');
        remark.classList.add('yellow');
        remark.textContent = 'Good'
    } else if(slider.value>=10 && slider.value<12){
        imageBox.innerHTML = `<img src="download(4).png" alt="">`;
        remark.classList.remove('green', 'yellow', 'orange', 'red');
        remark.classList.add('blue');
        remark.textContent = 'Strong'
    } else{
        imageBox.innerHTML = `<img src="download.png" alt="">`;
        remark.classList.remove('blue', 'yellow', 'orange', 'red');
        remark.classList.add('green');
        remark.textContent = 'Very Strong'
    }
}

window.addEventListener('load', generateRandomPassword);
regenBtn.addEventListener('click', generateRandomPassword);
slider.addEventListener('input', generateRandomPassword);
checkboxs.forEach((e) => {
    e.addEventListener('change', generateRandomPassword);
});


//copy function
copyBtn.addEventListener('click', () => {
    inputPass.select();
    inputPass.setSelectionRange(0,99999);
    navigator.clipboard.writeText(inputPass.value);
    popup.classList.remove('hide');
    setTimeout(() => {
        popup.classList.add('hide');
    }, 2000);
});

