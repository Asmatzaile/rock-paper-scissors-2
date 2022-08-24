function getPlayerChoice() {
    return wordToNum(prompt("Rock, paper or scissors?: "));
}

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

function playRound(playerSelection, computerSelection) {
return result = ((((playerSelection-computerSelection)+1)%3+3)%3-1)
}




function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);

        let playerText = numToWord(playerSelection);
        let computerText = numToWord(computerSelection);
        
        if (roundResult === 1) {
            playerScore++;
            console.log(`You win! ${playerText} beats ${computerText}!`);
        } else if (roundResult === -1) {
            computerScore++;
            console.log(`You lose! ${playerText} is beaten by ${computerText}`);
        } else {
            console.log(`It's a tie! You both chose ${playerText}`);
        }

        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    }

    console.log("GAME ENDED!")
    reportWinner();



    function reportWinner() {
        if (playerScore>computerScore) {
            console.log("PLAYER WINS!")
        } else if (playerScore<computerScore) {
            console.log("COMPUTER WINS!")
        } else {
            console.log("IT'S A TIE!")
        }
    }
}