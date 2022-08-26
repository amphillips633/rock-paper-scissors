

// console.log(getComputerChoice());



let playerSelection;
let computerSelection;

let playerWinGame = `Congratulation, you win!`;
let computerWinGame = `Sorry, you lose.`;
let tieGame = `It's a tie!`;

let playerWinRound;
let computerWinRound;

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {

    //returns random whole number between 0-2
    let getRandomNumber = Math.floor(Math.random() * 3);
    
      if (getRandomNumber == 0) {
        return "rock";
      } else if (getRandomNumber == 1) {
        return "paper";
      } else if (getRandomNumber == 2) {
        return "scissors";
      }
    
    }


function playRound() {
    playerSelection = prompt("Please enter rock, paper, or scissors");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();

    playerWinRound = `You win! ${playerSelection} beats ${computerSelection}`;
    computerWinRound = `You lose! ${computerSelection} beats ${playerSelection}`;
    tieRound = `It's a tie! You both selected ${computerSelection}. Try again.`;

    if (playerSelection === computerSelection) {
        return tieRound, computerWinRound = false, playerWinRound = false;
    } else if ( 
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    )  {
        return playerWinRound, computerWinRound = false;
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    )  {
        return computerWinRound, playerWinRound = false;
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        playRound();
        if (playerWinRound) {
            playerScore ++;
            alert(playerWinRound);
        } else if (computerWinRound) {
            computerScore ++, alert(computerWinRound);
        } else if (tieRound) {
            i--, alert(tieRound);
        }
        
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        alert(playerWinGame);
    } else if (computerScore > playerScore) {
        alert(playerWinGame);
    } else if (computerScore === playerScore) {
        alert(tieGame);
    }

}

game();