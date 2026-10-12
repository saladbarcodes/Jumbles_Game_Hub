const body = document.body;
const player1Turn = true;
const player2Turn = false;
let rounds = 0;
let winCondition = false;

const winScreen = document.getElementById("win-screen");

const PlayerOne = 
{
    turn: true,
    points: 0
};
const PlayerTwo = 
{
    turn: false,
    points: 0
}

const Pos = 
[
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
];

function victoryScreen(player)
{
    winScreen.textContent = "Player " + player + " WON!!!";
    winScreen.style.display = "flex";
    winScreen.style.flexDirection = "column";
    gameArea.inert = true;
}
function hasWon(player)
{
    // This will be a very temporary implementation for tictactoe
    if (Pos[0] === player && Pos[1] === player && Pos[2] === player)
    {
        console.log("Player " + player + " has WON!!");
        winCondition = true;
    }
    if (Pos[3] === player && Pos[4] === player && Pos[5] === player)
    {
        console.log("Player " + player + " has WON!!");
        winCondition = true;
    }
    if (Pos[6] === player && Pos[7] === player && Pos[8] === player)
    {
        console.log("Player " + player + " has WON!!");
        winCondition = true;
    }
    if (Pos[0] === player && Pos[3] === player && Pos[6] === player)
    {
        console.log("Player " + player + " has WON!!");
        winCondition = true;
    }
    if (Pos[1] === player && Pos[4] === player && Pos[7] === player)
    {
        console.log("Player " + player + " has WON!!");
        winCondition = true;
    }
    if (Pos[2] === player && Pos[5] === player && Pos[8] === player)
    {
        console.log("Player " + player + " has WON!!");
        winCondition = true;
    }
    if (Pos[0] === player && Pos[4] === player && Pos[8] === player)
    {
        console.log("Player " + player + " has WON!!");
        winCondition = true;
    }
    if (Pos[2] === player && Pos[4] === player && Pos[6] === player)
    {
        console.log("Player " + player + " has WON!!");
        winCondition = true;
    }
    if (winCondition)
        victoryScreen(player);
    return winCondition;
}

function gameLogic(playerOneTurn, pos, boardPos)
{
    if (playerOneTurn)
    {
        if (pos.className !== "player-one" 
            && pos.className !== "player-two")
        {
            pos.classList.add("player-one");
            PlayerOne.turn = false;
            Pos[boardPos] = 1;
            rounds += 1;
            if (rounds >= 5)
                hasWon(1);
        }
    } else
    {
        if (pos.className !== "player-one" 
            && pos.className !== "player-two")
        {
            pos.classList.add("player-two");
            PlayerOne.turn = true;
            Pos[boardPos] = 2;
            rounds += 1;
            if (rounds >= 5)
                hasWon(2);
        }
    }
    if (rounds === 9 && hasWon() === false)
    {
        console.log("TIE!");
        alert("TIE!!!");
        rounds = 0;
    }
}

const gameArea = document.getElementById("game-area");
gameArea.addEventListener("click", (event) =>
{
    const gamePos = event.target.id;
    const boardPos = (parseInt(gamePos[3], 10)) - 1;
    if (gamePos.includes("pos"))
    {
        const pos = document.getElementById(gamePos);
        console.log("Game pos: " + gamePos + " was clicked!");
        gameLogic(PlayerOne.turn, pos, boardPos);
    }
});