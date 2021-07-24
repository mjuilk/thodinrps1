function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    let result = document.querySelector('#result');

    if (lowerPlayer === computerSelection) {
        result.textContent = "DRAW!";
    }
    else if ((lowerPlayer === 'rock') && (computerSelection === 'scissors')) {
        result.textContent =  "YOU WIN! Rock beats scissors!";
    }
    else if ((lowerPlayer === 'rock') && (computerSelection === 'paper')) {
        result.textContent =  "YOU LOSE! Paper beats rock!";
    }
    else if ((lowerPlayer === 'scissors') && (computerSelection === 'paper')) {
        result.textContent =  "YOU WIN! Scissors beats paper!";
    }
    else if ((lowerPlayer === 'scissors') && (computerSelection === 'rock')) {
        result.textContent =  "YOU LOSE! Rock beats scissors!";
    }
    else if ((lowerPlayer === 'paper') && (computerSelection === 'rock')) {
        result.textContent =  "YOU WIN! Paper beats rock!";
    }
    else if ((lowerPlayer === 'paper') && (computerSelection === 'scissors')) {
        result.textContent =  "YOU LOSE! Scissors beats paper!";
    }
}

let paper = document.getElementById("paper");
document.getElementById("rock").addEventListener("click", playRound("rock", computerPlay()));
document.getElementById('paper').onclick = function test() {
    document.getElementById('paper').style = "Color: red";
}