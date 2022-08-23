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

let playerWinRound = `You win! ${playerSelection} beats ${computerSelection}`;
let computerWinRound = `You lose! ${computerSelection} beats ${playerSelection}`;
let tieRound = `It's a tie! You both selected ${computerSelection}`;

let playerWinGame = `Congratulation, you win!`;
let computerWinGame = `Sorry, you lose.`;


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return tieRound;
    } else if ( 
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    )  {
        return playerWinRound;
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    )  {
        return computerWinRound;
    }
}


// //plays a round of the game until either playScore or computerScore = 5
// function game() {
//     if (playerScore < 5 && computerScore < 5) {
//         playLoop();
//     }
// }


 
// function winCondition() {
//     let playerScore;
//     let computerScore;

//     } else if (computerScore === 5) {
//         return computerWinGame;
//     } else if (playerScore === 5) {
//         return playerWinGame;
//     }


function game() {
    for (let playerScore = 0, computerScore = 0; playerScore < 5 && computerScore < 5; scoreIncrement()) {
        playRound();

        // if (playerWinRound) {
        //     playerScore ++;
        //     console.log(`Player: ${playerScore}
        //     Computer ${computerScore}`);
        // } else if (computerWinRound) {
        //     computerScore++;
        //     console.log(`Player: ${playerScore}
        //     Computer ${computerScore}`);
        // }

        function scoreIncrement() {
            if (playerWinRound) {
                playerScore++;
            } else if (computerWinRound) {
                computerScore++;
            }
        }
        
    }
}

console.log(game());


//increments playerScore or computerScore depending on who won round

// console.log(playRound(playerSelection, computerSelection))
