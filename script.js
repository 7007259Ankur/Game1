let playerScore = 0;
let computerScore = 0;
let playerName = "";

function startGame() {
  playerName = document.getElementById("name").value.trim();
  if (playerName === "") {
    alert("Please enter your name.");
    return;
  }
  document.getElementById("player-name").style.display = "none";
  document.getElementById("points").style.display = "block";
  document.getElementById("choices").style.display = "block";
  document.getElementById("restart").style.display = "block";
  document.getElementById("player-name-display").textContent = playerName;
}

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playerChoice(playerSelection) {
  const computerSelection = computerChoice();
  const result = getResult(playerSelection, computerSelection);
  displayResult(result, playerSelection, computerSelection);
}

function getResult(player, computer) {
  if (player === computer) return "It's a tie!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    document.getElementById("player-score").textContent = playerScore;
    return `${playerName} wins!`;
  } else {
    computerScore++;
    document.getElementById("computer-score").textContent = computerScore;
    return "Computer wins!";
  }
}

function displayResult(result, player, computer) {
  const resultDisplay = document.getElementById("result");
  resultDisplay.textContent = `${result} ${playerName} chose ${player}, computer chose ${computer}.`;
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("result").textContent = "";
}
