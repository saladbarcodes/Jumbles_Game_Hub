const body = document.body;

const rps = "../games/Rock_Paper_Scissors/";

const socket = io();

// const gamesList = 
// [
//     rps
// ];

function redirectToGame(directory)
{
    window.location.href = directory;
}

const rockPaperScissors = document.getElementById("rock-paper-scissors");

rockPaperScissors.addEventListener("click", () => 
{
    redirectToGame(rps);
});