const body = document.body;
// All game options
const gameOptions = ["Rock", "Paper", "Scissors"];
// Text
const playerChoiceText = document.getElementById("player-choice");
const computerChoiceText = document.getElementById("computer-choice");
const winText = document.getElementById("win-text");
// This is for the win count
const computerWins = document.getElementById("computer-wins");
const playerWins = document.getElementById("player-wins");
let playerWinCount = 0;
let computerWinCount = 0;
// Creates the game choices rock, paper, scissors
const rockChoice = document.getElementById("rock-choice");
const paperChoice = document.getElementById("paper-choice");
const scissorsChoice = document.getElementById("scissors-choice");
// Adds clickable events to the choices
rockChoice.addEventListener("click", () => gameLogic(gameOptions[0]));
paperChoice.addEventListener("click", () => gameLogic(gameOptions[1]));
scissorsChoice.addEventListener("click", () => gameLogic(gameOptions[2]));
// adds computer logic
function randomizeComputer()
{
    const computerRandomizer = Math.floor(Math.random() * 3)
    console.log(computerRandomizer);
    const computerChoice = gameOptions[computerRandomizer];
    return computerChoice;
}
// actual game logic for rock paper scissors
function gameLogic(choice)
{
    const computerChoice = randomizeComputer();
    computerChoiceText.textContent = "Computer choice: " + computerChoice;
    playerChoiceText.textContent = "Player choice: " + choice;
    if (choice === computerChoice)
    {
        winText.textContent = "TIE";
    } else if (choice === "Rock" && computerChoice === "Scissors" ||
                choice === "Scissors" && computerChoice === "Paper" ||
                choice === "Paper" && computerChoice === "Rock"
              )
    {
        winText.textContent = "WIN";
        playerWinCount += 1;
        playerWins.textContent = "Player: " + playerWinCount;
    } else
    {
        winText.textContent = "LOSE";
        computerWinCount += 1;
        computerWins.textContent = "Computer: " + computerWinCount;
    }
}