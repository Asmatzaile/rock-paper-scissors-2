// function getPlayerChoice() {
//     return wordToNum(prompt("Rock, paper or scissors?: "));
// }

let playerText;
let computerText;

let playerScore = 0;
let computerScore = 0;

let playerOldScore = 0;
let computerOldScore = 0;


let resetInNextRound = false;

const playerScoreBoard = document.querySelector('#player-scoreboard');
const computerScoreBoard = document.querySelector('#computer-scoreboard');


function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function numToWord(num) {
    switch(num) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    };
}

function wordToNum(word) {
    word = word.toLowerCase();
    switch(word) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
}

function playRound(playerSelection) {

    if (resetInNextRound === true) reset();

    const computerNumber = getComputerChoice();
    const playerNumber = wordToNum(playerSelection);

    playerText = numToWord(playerNumber);
    computerText = numToWord(computerNumber);

    result = ((((playerNumber-computerNumber)+1)%3+3)%3-1);

    updateScore(result);
    roundAnnounce(result);
    if (playerScore < 5 && computerScore < 5) return;
    triggerEndGame();
}

function getRoundText(roundResult) {
    if (roundResult === 1) {
        return (`You win! ${playerText} beats ${computerText}!`);
    }
    if (roundResult === -1) {
        return (`You lose! ${playerText} is beaten by ${computerText}`);
    }
        return (`It's a tie! You both chose ${playerText}`);
}

function updateScore(roundResult) {
    if (roundResult === 1) playerScore++;
    if (roundResult === -1) computerScore++;
    updateScoreBoard();
}

function updateScoreBoard() {
    if (playerScore !== playerOldScore) {
        playerScoreBoard.textContent = `Player score: ${playerScore}`;
        playerOldScore = playerScore;
    }
    if (computerScore !== computerOldScore) {
        computerScoreBoard.textContent = `Computer score: ${computerScore}`;
        computerOldScore = computerScore;
    }
}

const div = document.querySelector("#div");

function triggerEndGame() {
    const para = document.createElement('p');
    let winner;
    if (playerScore>computerScore) {winner = "player";}
    else if (computerScore>playerScore) {winner = "computer";}
    para.textContent = `${winner.toUpperCase()} WINS!`;
    div.appendChild(para);
    resetInNextRound = true;
}



const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id));
});



function roundAnnounce(roundResult) {
    const para = document.createElement('p');
    para.textContent = getRoundText(roundResult);
    div.appendChild(para);
}

function reset() {
    div.textContent = "";
    playerScore = 0;
    computerScore = 0;
    updateScoreBoard();
    resetInNextRound = false;
}