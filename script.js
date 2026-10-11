const body = document.body;

const github = "/games/"

const gamesList = 
{
    rps: "Rock_Paper_Scissors",
    rpg: "RPG",
    ttt: "Tic-Tac-Toe"
};

function redirectToGame(directory)
{
    window.location.href = github + directory + "/index.html";
}

const rockPaperScissors = document.getElementById("rock-paper-scissors");
const ticTacToe = document.getElementById("tic-tac-toe");

rockPaperScissors.addEventListener("click", () => 
{
    redirectToGame(gamesList.rps);
});
// dungeonGame.addEventListener("click", () =>
// {
//     redirectToGame(gamesList.ttt);
// });
ticTacToe.addEventListener("click", () =>
{
    redirectToGame(gamesList.ttt);
});

