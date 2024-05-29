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

let playerChoice = document.querySelectorAll(".rps-btn");
let playerSelection = document.querySelector(".player-selection");
let playerWin = document.querySelector(".player-score");
let playerSelectionValue;
let gameNotice = document.querySelector(".game-notice");
let playAgainContainer = document.querySelector(".play-again");
let playerLoss = document.querySelector(".player-losses");
let playerMoves = document.querySelector(".moves");

const playGame = () => {
  playerChoice.forEach((button) => {
    button.addEventListener("click", () => {
      playerMovesLeft--;
      playerMoves.textContent = playerMovesLeft;
      let computerChoice = getComputerChoice();
      console.log(computerChoice);
      playerSelectionValue = button.id;
      gameNotice.textContent = "";
      playRound(playerSelectionValue, computerChoice);
      if (playerMovesLeft === 0) {
        getWinner(playerWins, computerWin);
      }
    });
  });
};

playGame();

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return draws++, (gameNotice.textContent = "It's a draw!");
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    return (
      computerWin++,
      playerLosses++,
      ((gameNotice.textContent = "Computer scores!"),
      (playerLoss.textContent = playerLosses))
    );
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return (
      playerWins++,
      (gameNotice.textContent = "Player scores!"),
      (playerWin.textContent = playerWins)
    );
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return (
      playerWins++,
      (gameNotice.textContent = "Player scores!"),
      (playerWin.textContent = playerWins)
    );
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    return (
      computerWin++,
      playerLosses++,
      ((gameNotice.textContent = "Computer scores!"),
      (playerLoss.textContent = playerLosses))
    );
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return (
      playerWins++,
      (gameNotice.textContent = "Player scores!"),
      (playerWin.textContent = playerWins)
    );
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    return (
      computerWin++,
      playerLosses++,
      ((gameNotice.textContent = "Computer scores!"),
      (playerLoss.textContent = playerLosses))
    );
  }
}

function getWinner(playerScore, computerScore) {
  if (playerScore === computerScore) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    gameNotice.textContent = "It's a draw!";
    playAgain();
  } else if (computerScore > playerScore) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    gameNotice.textContent = "Computer wins game!";
    playAgain();
  } else if (playerScore > computerScore) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    gameNotice.textContent = "Player wins game!";
    playAgain();
  }
}

const playAgain = () => {
  let playAgainBtn = document.createElement("button");
  playAgainBtn.textContent = "Play again?";
  playAgainBtn.setAttribute("class", "rps-btn");
  playAgainContainer.appendChild(playAgainBtn);
  playAgainBtn.onclick = function () {
    playerWins = 0;
    computerWin = 0;
    playerLosses = 0;
    playerWin.textContent = 0;
    playerLoss.textContent = 0;
    playerMovesLeft = 5;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    playAgainBtn.remove();
  };
};

let computerWin = 0;
let playerWins = 0;
let playerLosses = 0;
let playerMovesLeft = 5;
let draws = 0;
