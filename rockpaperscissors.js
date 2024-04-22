function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  if (
    playerChoice === playerChoice.toUpperCase() ||
    playerChoice.toLowerCase()
  ) {
    playerChoice = playerChoice.toLowerCase();
  }

  if (playerChoice === computerChoice) {
    return draws++, "It's a draw!";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    return computerWin++, "Computer wins! Paper beats rock.";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return playerWin++, "Player wins! Paper beats rock.";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return playerWin++, "Player wins. Scissors beat paper";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    return computerWin++, "Computer wins! Scissors beat paper.";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return playerWin++, "Player wins! Rock beats scissors. ";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    return computerWin++, "Computer wins! Rock beats scissors. ";
  }
}

function getWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log(`Player wins with ${playerWin} points!`)
  }
  else if (computerScore > playerScore) {
    console.log(`Computer wins with ${computerWin} points!`)
  } else { console.log(`Player and Computer tied!`)}
}

let playerWin = 0;
let computerWin = 0;
let draws = 0;

function playGame() {
  let playerSelection = prompt("Rock, paper or scissors?");
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log(`Player wins: ${playerWin}`);
  console.log(`Computer wins: ${computerWin}`);
  console.log(`Draws: ${draws}`);

  playerSelection = prompt("Rock, paper or scissors?");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log(`Player wins: ${playerWin}`);
  console.log(`Computer wins: ${computerWin}`);
  console.log(`Draws: ${draws}`);

  playerSelection = prompt("Rock, paper or scissors?");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log(`Player wins: ${playerWin}`);
  console.log(`Computer wins: ${computerWin}`);
  console.log(`Draws: ${draws}`);

  playerSelection = prompt("Rock, paper or scissors?");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log(`Player wins: ${playerWin}`);
  console.log(`Computer wins: ${computerWin}`);
  console.log(`Draws: ${draws}`);

  playerSelection = prompt("Rock, paper or scissors?");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log(`Player wins: ${playerWin}`);
  console.log(`Computer wins: ${computerWin}`);
  console.log(`Draws: ${draws}`);

  getWinner(playerWin, computerWin)

  
}

playGame();
