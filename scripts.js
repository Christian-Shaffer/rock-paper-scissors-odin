const gameplay = document.querySelector('.gameplay');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const scoreTracking = document.querySelector('.score');

const moves = ['Rock', 'Paper', 'Scissors'];
let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;
let winText;

function getComputerChoice () {
    const computerChoice = moves[Math.floor(Math.random() * 3)];
    return computerChoice;
}

rockButton.addEventListener('click', () => {
    playRound('Rock')
    checkGameCount();
});

paperButton.addEventListener('click', () => {
    playRound('Paper');
    checkGameCount();
});

scissorsButton.addEventListener('click', () => {
    playRound('Scissors');
    checkGameCount();
})

function checkGameCount() {
    if (computerWinCount > 0 || playerWinCount > 0|| tieCount > 0) {
        scoreTracking.textContent = `Your wins: ${playerWinCount}. Computer wins: ${computerWinCount}. Tie count: ${tieCount}.`;
    }
}

function showWinner () {
    const roundWinner = document.createElement('p');
    roundWinner.textContent = `${winText}`;
    gameplay.appendChild(roundWinner);
}

function playRound(playerChoice, computerChoice = getComputerChoice()) {
    console.log(playerChoice, computerChoice)
    if (playerChoice == 'Rock' && computerChoice == 'Paper') {
        console.log('computer win');
        winText = 'Ahh, the computer won that one.'
        ++computerWinCount;
        showWinner();
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        console.log('player win');
        winText = 'You won that one - nice!';
        ++playerWinCount;
        showWinner();
    } else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
        console.log('computer win');
        winText = 'Ahh, the computer won that one.'
        ++computerWinCount;
        showWinner();
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        console.log('player win');
        winText = 'You won that one - nice!';
        ++playerWinCount;
        showWinner();
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        console.log('player win');
        winText = 'You won that one - nice!';
        ++playerWinCount;
        showWinner();
    } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
        console.log('computer win');
        winText = 'Ahh, the computer won that one.'
        ++computerWinCount;
        showWinner();
    } else {
        console.log('tie');
        winText = 'A tie. Kinda lame, but ok!';
        ++tieCount;
        showWinner();
    }
}

// Add logic for displaying winner after 5 games
// Add reset button
// Add styling