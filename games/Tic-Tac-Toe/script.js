const body = document.body;
const player1Turn = true;
const player2Turn = false;
let rounds = 0;

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

const Positions = 
{
    one: false, 
    two: false, 
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false
};

function hasWon()
{
    return false;
}

function gameLogic(playerOneTurn, pos)
{
    rounds += 1;
    if (playerOneTurn)
    {
        pos.style.backgroundColor = "blue";
        PlayerOne.turn = false;
    } else
    {
        pos.style.backgroundColor = "red";
        PlayerOne.turn = true;
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
    if (gamePos.includes("pos"))
    {
        const pos = document.getElementById(gamePos);
        console.log("Game pos: " + gamePos + " was clicked!");
        gameLogic(PlayerOne.turn, pos);
    }
});