const body = document.body;

const rps = "Rock_Paper_Scissors/";

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