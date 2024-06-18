const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.querySelector('.result');
const imgButtons = document.querySelectorAll('.img-button');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function updateScore(result) {
    if (result === 'You win!') {
        playerScore++;
    } else if (result === 'Computer wins!') {
        computerScore++;
    }

    playerScoreElement.textContent = `Player: ${playerScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = 'Player: 0';
    computerScoreElement.textContent = 'Computer: 0';
}

imgButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.getAttribute('data-choice');
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);

        resultElement.textContent = result;
        updateScore(result);
    });
});

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetScore);
function updateScore(result) {
    if (result === 'You win!') {
        playerScore++;
        resultElement.style.color = 'green'; 
    } else if (result === 'Computer wins!') {
        computerScore++;
        resultElement.style.color = 'red'; 
    } else {
        resultElement.style.color = 'black'; 
    }

    playerScoreElement.textContent = `Player: ${playerScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
}
