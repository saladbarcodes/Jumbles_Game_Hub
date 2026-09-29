const body = document.body;

const rps = "/games/Rock_Paper_Scissors";
const mm = "/games/Memory_Match";
const ttt = "/games/Tic-Tac-Toe";

// const gamesList = 
// [
//     rps
// ];

function redirectToGame(directory)
{
    window.location.href = directory + "/index.html";
}

const rockPaperScissors = document.getElementById("rock-paper-scissors");

rockPaperScissors.addEventListener("click", () => 
{
    redirectToGame(rps);
});