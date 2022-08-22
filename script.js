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

// console.log(getComputerChoice());


let playerSelection = prompt("Please enter rock, paper, or scissors");
playerSelection = playerSelection.toLowerCase();
let computerSelection = getComputerChoice();

let playerWin = `You win! ${playerSelection} beats ${computerSelection}`;
let computerWin = `You lose! ${computerSelection} beats ${playerSelection}`;
let tie = `It's a tie! You both selected ${computerSelection}`;


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return tie;
    } else if ( 
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    )  {
        return playerWin;
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    )  {
        return computerWin;
    }
}

function game() {
    {
        
    }
}


console.log(playRound(playerSelection, computerSelection))
