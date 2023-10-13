let Score = JSON.parse(localStorage.getItem('Score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}; 
updateScoreElement()

function playGame(myMove){

    const botMove = pickBotMove();

    let result = '';

    if(myMove === 'Scissors'){
        if(botMove === 'Rock'){
            result = 'You Lost';
        }
        else if(botMove === 'Paper'){
            result = 'You Win';
        }
        else{
            result = 'Tie';
        }
    }
    else if(myMove === 'Rock'){
        if(botMove === 'Rock'){
            result = 'Tie';
        }
        else if(botMove === 'Paper'){
            result = 'You Lost';
        }
        else{
            result = 'You Win';
        }
    }
    else {
        if(botMove === 'Rock'){
            result = 'You Win';
        }
        else if(botMove === 'Paper'){
            result = 'Tie';
        }
        else{
            result = 'You Lost';
        }
    }
    
    if(result === 'You Win') Score.wins += 1;
    else if(result === 'You Lost') Score.losses += 1;
    else Score.ties += 1;

    localStorage.setItem('Score',JSON.stringify(Score));

    updateScoreElement();

    document.querySelector('.js-result')
        .innerHTML = result;

    document.querySelector('.js-moves')
        .innerHTML = `You 
<img src="${myMove}-emoji.png" alt="Rock" class="move-icon">
<img src="${botMove}-emoji.png" alt="Scissors" class="move-icon">
Computerr`;
}


function updateScoreElement(){
    document.querySelector('.js-score')
        .innerHTML = `win: ${Score.wins}, losses: ${Score.losses}, ties: ${Score.ties}`;
}

function pickBotMove() {

    const randNum = Math.random();

    let botMove = '';

    if(randNum >= 0 && randNum < 1/3){
        botMove = 'Rock';
    }
    else if(randNum >= 1/3 && randNum < 2/3){
        botMove = 'Paper';
    }
    else{
        botMove = 'Scissors';
    }
    return botMove;
}