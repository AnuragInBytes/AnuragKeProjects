const stopwatchBtn = document.getElementById('stopwatchBtn');
const pomodoroBtn = document.getElementById('pomodoroBtn');
const sbreak = document.getElementById('sbreakBtn');
const lbreak = document.getElementById('lbreakBtn');

const minn = document.getElementById('min');
const secc = document.getElementById("sec");
const milisecc = document.getElementById('milisec');


let counter = null;
let displayTime = document.getElementById('displayTime');


//default
if(counter != null) clearInterval(counter);
let [millisec, seconds, minutes] = [0, 0, 0];
function playWatch(){
    millisec++;
    if(millisec===10){
        millisec = 0;
        seconds++;
        if(seconds===60){
            seconds = 0;
            minutes++;
        }
    }
    
    let m = minutes<10?"0"+minutes:minutes;
    let s = seconds<10?"0"+seconds:seconds;
    let ms = millisec<10?"0"+millisec:millisec;

    // displayTime.innerText = `${m} : ${s} : ${ms}`;
    minn.innerText = ` ${m} `;
    secc.innerText = ` ${s} `;
    milisecc.innerText = ` ${ms} `;
}

document.getElementById('pauseBtn').addEventListener('click', () => {
    clearInterval(counter);
});
document.getElementById('playBtn').addEventListener('click', () => {
    if(counter != null) clearInterval(counter);
    counter = setInterval(playWatch, 100);
});
document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(counter);
    [millisec, seconds, minutes] = [0, 0, 0];
    minn.innerText = ` 00 `;
    secc.innerText = ` 00 `;
    milisecc.innerText = ` 00 `;
});


//pomodoro
pomodoroBtn.addEventListener('click', () => {

    document.body.style.backgroundColor = '#ccffcc';
    if(counter != null) clearInterval(counter);
    minn.innerText = ` 24 `;
    secc.innerText = ` 59 `;
    milisecc.innerText = ` 09 `;

    let [millisec, seconds, minutes] = [10, 59, 24];

    function playWatch(){
        millisec--;
        if(millisec === 0){
            millisec = 10;
            seconds--;
            if(seconds===0){
                seconds = 59;
                minutes--;
                if(minutes===0){
                    displayTime.innerText = "Congratulations!! You made it...";
                    clearInterval(counter);
                }
            }
        }
        let m = minutes<10?"0"+minutes:minutes;
        let s = seconds<10?"0"+seconds:seconds;
        let ms = millisec<10?"0"+millisec:millisec;

        minn.innerText = ` ${m} `;
        secc.innerText = ` ${s} `;
        milisecc.innerText = ` ${ms} `;
    }

    document.getElementById('pauseBtn').addEventListener('click', () => {
        clearInterval(counter);
    });
    document.getElementById('playBtn').addEventListener('click', () => {
        if(counter != null) clearInterval(counter);
        counter = setInterval(playWatch, 100);
    });
    document.getElementById('resetBtn').addEventListener('click', () => {
        clearInterval(counter);
        [millisec, seconds, minutes] = [10, 59, 24];
        minn.innerText = ` 24 `;
        secc.innerText = ` 59 `;
        milisecc.innerText = ` 09 `;
    });
});

//stawpwatch
stopwatchBtn.addEventListener('click', () => {

    document.body.style.backgroundColor = '#edeafe';
    if(counter != null) clearInterval(counter);
    minn.innerText = ` 00 `;
    secc.innerText = ` 00 `;
    milisecc.innerText = ` 00 `;
    let [millisec, seconds, minutes] = [0, 0, 0];
    function playWatch(){
        millisec++;
        if(millisec===10){
            millisec = 0;
            seconds++;
            if(seconds===60){
                seconds = 0;
                minutes++;
            }
        }
        
        let m = minutes<10?"0"+minutes:minutes;
        let s = seconds<10?"0"+seconds:seconds;
        let ms = millisec<10?"0"+millisec:millisec;
    
        minn.innerText = ` ${m} `;
        secc.innerText = ` ${s} `;
        milisecc.innerText = ` ${ms} `;
    }
    
    document.getElementById('pauseBtn').addEventListener('click', () => {
        clearInterval(counter);
    });
    document.getElementById('playBtn').addEventListener('click', () => {
        if(counter != null) clearInterval(counter);
        counter = setInterval(playWatch, 100);
    });
    document.getElementById('resetBtn').addEventListener('click', () => {
        clearInterval(counter);
        [millisec, seconds, minutes] = [0, 0, 0];
        minn.innerText = ` 00 `;
        secc.innerText = ` 00 `;
        milisecc.innerText = ` 00 `;
    });
});


//shortbreak
sbreak.addEventListener('click', () => {

    document.body.style.backgroundColor = '#d3f4ff';
    if(counter != null) clearInterval(counter);
    minn.innerText = ` 04 `;
    secc.innerText = ` 59 `;
    milisecc.innerText = ` 09 `;

    let [millisec, seconds, minutes] = [10, 59, 4];

    function playWatch(){
        millisec--;
        if(millisec === 0){
            millisec = 10;
            seconds--;
            if(seconds===0){
                seconds = 59;
                minutes--;
                if(minutes===0){
                    displayTime.innerText = "Break over, Get back to Grinding...";
                    clearInterval(counter);
                }
            }
        }
        let m = minutes<10?"0"+minutes:minutes;
        let s = seconds<10?"0"+seconds:seconds;
        let ms = millisec<10?"0"+millisec:millisec;

        minn.innerText = ` ${m} `;
        secc.innerText = ` ${s} `;
        milisecc.innerText = ` ${ms} `;
    }

    document.getElementById('pauseBtn').addEventListener('click', () => {
        clearInterval(counter);
    });
    document.getElementById('playBtn').addEventListener('click', () => {
        if(counter != null) clearInterval(counter);
        counter = setInterval(playWatch, 100);
    });
    document.getElementById('resetBtn').addEventListener('click', () => {
        clearInterval(counter);
        [millisec, seconds, minutes] = [10, 59, 24];
        minn.innerText = ` 04 `;
        secc.innerText = ` 59 `;
        milisecc.innerText = ` 09 `;
    });
});


//longbreak
lbreak.addEventListener('click', () => {

    document.body.style.backgroundColor = '#ffe2d6';
    if(counter != null) clearInterval(counter);
    minn.innerText = ` 14 `;
    secc.innerText = ` 59 `;
    milisecc.innerText = ` 09 `;

    let [millisec, seconds, minutes] = [10, 59, 14];

    function playWatch(){
        millisec--;
        if(millisec === 0){
            millisec = 10;
            seconds--;
            if(seconds===0){
                seconds = 59;
                minutes--;
                if(minutes===0){
                    displayTime.innerText = "Break over, Get back to Grinding...";
                    clearInterval(counter);
                }
            }
        }
        let m = minutes<10?"0"+minutes:minutes;
        let s = seconds<10?"0"+seconds:seconds;
        let ms = millisec<10?"0"+millisec:millisec;

        minn.innerText = ` ${m} `;
        secc.innerText = ` ${s} `;
        milisecc.innerText = ` ${ms} `;
    }

    document.getElementById('pauseBtn').addEventListener('click', () => {
        clearInterval(counter);
    });
    document.getElementById('playBtn').addEventListener('click', () => {
        if(counter != null) clearInterval(counter);
        counter = setInterval(playWatch, 100);
    });
    document.getElementById('resetBtn').addEventListener('click', () => {
        clearInterval(counter);
        [millisec, seconds, minutes] = [10, 59, 14];
        minn.innerText = ` 14 `;
        secc.innerText = ` 59 `;
        milisecc.innerText = ` 09 `;
    });
})
