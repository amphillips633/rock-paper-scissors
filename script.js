function getComputerChoice() {

//returns random whole number between 0-2
//   function getRandomNumber() {
//     return Math.floor(Math.random() * 3);
//   }

let getRandomNumber = Math.floor(Math.random() * 3);

//   console.log(getRandomNumber());

  if (getRandomNumber == 0) {
    // return randomNumber() ;
    return "Rock";
  } else if (getRandomNumber == 1) {
    // return randomNumber();
    return "Paper";
  } else if (getRandomNumber == 2) {
    // return randomNumber();
    return "Scissors";
  }



}

console.log(getComputerChoice());