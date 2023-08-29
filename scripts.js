const moves = ['Rock', 'Paper', 'Scissors'];
let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

function getComputerChoice () {
    const choice = moves[Math.floor(Math.random() * 3)];
    return choice;
}

function playRound (playerSelection = prompt('Pick'), computerSelection = getComputerChoice()) {
    const formattedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);

    if (moves.includes(formattedPlayerSelection) == false) {
        console.log('Spell your choice correctly! :-)');
        playRound();
    } else if (formattedPlayerSelection == 'Rock' && computerSelection == 'Paper') {
        console.log('computer win');
        return ++computerWinCount; 
    } else if (formattedPlayerSelection == 'Scissors' && computerSelection == 'Paper') {
        console.log('player win');
        return ++playerWinCount;
    } else if (formattedPlayerSelection == 'Scissors' && computerSelection == 'Rock') {
        console.log('computer win');
        return ++computerWinCount;
    } else if (formattedPlayerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log('player win');
        return ++playerWinCount;
    } else if (formattedPlayerSelection == 'Rock' && computerSelection == 'Scissors') {
        console.log('player win');
        return ++playerWinCount;
    } else if (formattedPlayerSelection == 'Paper' && computerSelection == 'Scissors') {
        console.log('computer win');
        return ++computerWinCount;
    } else {
        console.log("It's a tie");
        return ++tieCount;
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerWinCount > computerWinCount) { 
        let playerWon = true;
        console.log(`You won more! Your wins: ${playerWinCount}. Computer wins: ${computerWinCount}.`);
    } else {
        let computerWon = true;
        console.log(`The blasted computer won! Your wins: ${playerWinCount}. Computer wins: ${computerWinCount}. Ties: ${tieCount}.`);
    }
}


game();