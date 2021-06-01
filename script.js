function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    let lowerPlayer = playerSelection.toLowerCase();
    if (lowerPlayer === computerSelection) {
        return "DRAW!";
    }
    else if ((lowerPlayer === 'rock') && (computerSelection === 'scissors')) {
        return "YOU WIN! Rock beats scissors!";
    }
    else if ((lowerPlayer === 'rock') && (computerSelection === 'paper')) {
        return "YOU LOSE! Paper beats rock!";
    }
    else if ((lowerPlayer === 'scissors') && (computerSelection === 'paper')) {
        return "YOU WIN! Scissors beats paper!";
    }
    else if ((lowerPlayer === 'scissors') && (computerSelection === 'rock')) {
        return "YOU LOSE! Rock beats scissors!";
    }
    else if ((lowerPlayer === 'paper') && (computerSelection === 'rock')) {
        return "YOU WIN! Paper beats rock!";
    }
    else if ((lowerPlayer === 'paper') && (computerSelection === 'scissors')) {
        return "YOU LOSE! Scissors beats paper!";
    }
}

function game(rounds) {
    for (let i = 0; i < rounds; i++) {
        let playerSelection = 'rock';
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
}

console.log(game(3));