const header = document.querySelector('.header')
const gameplay = document.querySelector('.gameplay');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const resetButton = document.querySelector('.reset');
const scoreTracking = document.querySelector('.score');
const titleText = document.querySelector('.titleText');
const subtext = document.querySelector('.subtext');

const moves = ['Rock', 'Paper', 'Scissors'];
let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;
let roundResult;

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

resetButton.addEventListener('click', () => {
    playerWinCount = 0;
    computerWinCount = 0;
    tieCount = 0;
    resetGameplayText();
    scoreTracking.textContent = '';
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
});

function resetGameplayText () {
    titleText.textContent = 'You must win 5 games of Rock Paper Scissors against me to survive.';
    while (gameplay.firstChild) {
        gameplay.removeChild(gameplay.firstChild)
      }
}

function checkGameCount() {
    if (computerWinCount < 5 && playerWinCount < 5) {
        scoreTracking.textContent = `Your wins: ${playerWinCount}. Computer wins: ${computerWinCount}. Tie count: ${tieCount}.`;
    } else {
        announceChampion();
    }
}

function showRoundWinner () {
    const roundWinner = document.createElement('p');
    roundWinner.textContent = `${roundResult}`;
    gameplay.appendChild(roundWinner);
}

function announceChampion () {
    // resetGameplayText();
    if (playerWinCount == 5) {
        titleText.textContent = 'Noo!! You have defeated me.. But how?? I cheated..'
        scoreTracking.textContent = `Your wins: ${playerWinCount}. Computer wins: ${computerWinCount}. Tie count: ${tieCount}.`;
    } else if (computerWinCount == 5) {
        titleText.textContent = "Haha.. Now leave me! Do not try again.";
        scoreTracking.textContent = `Your wins: ${playerWinCount}. Computer wins: ${computerWinCount}. Tie count: ${tieCount}.`;
    }
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    subtext.textContent = '';
}

function playRound(playerChoice, computerChoice = getComputerChoice()) {
    console.log(playerChoice, computerChoice)
    if (playerChoice == 'Rock' && computerChoice == 'Paper') {
        console.log('computer win');
        roundResult = `HA! I won that one. I picked ${computerChoice.toLowerCase()} and you picked ${playerChoice.toLowerCase()}.`;
        ++computerWinCount;
        showRoundWinner();
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        console.log('player win');
        roundResult = `Okay.. you got that one. Good for you. I picked ${computerChoice.toLowerCase()} and you picked ${playerChoice.toLowerCase()}.`;
        ++playerWinCount;
        showRoundWinner();
    } else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
        console.log('computer win');
        roundResult = `HA! I won that one. I picked ${computerChoice.toLowerCase()} and you picked ${playerChoice.toLowerCase()}.`;
        ++computerWinCount;
        showRoundWinner();
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        console.log('player win');
        roundResult = `Okay.. you got that one. Good for you. I picked ${computerChoice.toLowerCase()} and you picked ${playerChoice.toLowerCase()}.`;
        ++playerWinCount;
        showRoundWinner();
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        console.log('player win');
        roundResult = `Okay.. you got that one. Good for you. I picked ${computerChoice.toLowerCase()} and you picked ${playerChoice.toLowerCase()}.`;
        ++playerWinCount;
        showRoundWinner();
    } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
        console.log('computer win');
        roundResult = `HA! I won that one. I picked ${computerChoice.toLowerCase()} and you picked ${playerChoice.toLowerCase()}.`;
        ++computerWinCount;
        showRoundWinner();
    } else {
        console.log('tie');
        roundResult = 'A tie. Kinda lame, but ok!';
        ++tieCount;
        showRoundWinner();
    }
}