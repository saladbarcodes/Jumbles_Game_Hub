const body = document.body;

const github = "/Jumbles_Game_Hub/games/"
const rps = "Rock_Paper_Scissors";
const rpg = "RPG";
const ttt = "Tic-Tac-Toe";

// const gamesList = 
// [
//     rps
// ];

function redirectToGame(directory)
{
    window.location.href = github + directory + "/index.html";
}

const rockPaperScissors = document.getElementById("rock-paper-scissors");

rockPaperScissors.addEventListener("click", () => 
{
    redirectToGame(rps);
});

