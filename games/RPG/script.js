let prevTime = 0;

// defines the player
const Player =
{
    x: 100,
    y: 100,
    health: 100,
    speed: 200,
    width: 50,
    height: 50,
    image: new Image()
};
class Coin 
{
    constructor(height, width)
    {
        this.height = height;
        this.width = width;
    }
    createCoin()
    {
        const coin = document.createElement("span");
        coin.style.height = this.height + "px";
        coin.style.width = this.width + "px";
        coin.style.backgroundColor = "yellow";
        coin.style.position = "absolute";
        coin.style.top = "200px";
        coin.style.left = "200px";
        coin.style.borderRadius = "50px";
        coin.style.border = "solid black";
        body.appendChild(coin);
    }
    collected()
    {
        // isTouchingObject(coin);
        // coin.style.display = "none";
    }
};
// hopefully for the game map
const GameMap = 
[
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0 
];

// sets the player sprite
Player.image.src = "player.png";
Player.image.width = Player.width;
Player.image.height = Player.height;

const keys = {};
const body = document.body;
// instatiates player
const player = document.getElementById("player");
player.appendChild(Player.image);
player.style.position = "absolute";
player.style.top = Player.x + "px";
player.style.left = Player.y + "px";

// const coin = document.createElement("span");
// coin.style.height = "40px";
// coin.style.width = "20px";
// coin.style.backgroundColor = "yellow";
// coin.style.position = "absolute";
// coin.style.top = "200px";
// coin.style.left = "200px";
// coin.style.borderRadius = "50px";
// coin.style.border = "solid black";
// body.appendChild(coin);

const coin1 = new Coin(40, 25);
coin1.createCoin();

// keeps track of keypresses for movement
window.addEventListener("keydown", (event) =>
{
    keys[event.key.toLowerCase()] = true;
});
window.addEventListener("keyup", (event) => 
{
    keys[event.key.toLowerCase()] = false;
});

// controls player movement
function playerWalk(dt)
{
    if (keys["w"])
    {
        Player.y -= Player.speed * dt;
    }
    if (keys["s"])
    {
        Player.y += Player.speed * dt;
    }
    if (keys["a"])
    {
        Player.x -= Player.speed * dt;
    }
    if (keys["d"])
    {
        Player.x += Player.speed * dt;
    }
    player.style.top = Player.y + "px";
    player.style.left = Player.x + "px";
}
function checkBorder()
{
    // vars for player and game borders
    const playerBorder = player.getBoundingClientRect();
    const topBorder = 0;
    const leftBorder = 0;
    const bottomBorder = window.innerHeight;
    const rightBorder = window.innerWidth;
    // tracks whether or not the player is within bounds and keeps
    // them there
    if (playerBorder.top < topBorder)
    {
        Player.y += topBorder - playerBorder.top;
    }
    if (playerBorder.left < leftBorder)
    {
        Player.x += leftBorder - playerBorder.left;
    }
    if (playerBorder.bottom > bottomBorder)
    {
        Player.y -= playerBorder.bottom - bottomBorder;
    }
    if (playerBorder.right > rightBorder)
    {
        Player.x -= playerBorder.right - rightBorder;
    }
}
function isTouchingObject(object)
{
    // vars for player and game borders
    const playerBorder = player.getBoundingClientRect();
    const objectBorder = object.getBoundingClientRect();
    const topBorder = objectBorder.top;
    const leftBorder = objectBorder.left;
    const bottomBorder = objectBorder.bottom;
    const rightBorder = objectBorder.right;
    const buffer = 21;
    // tracks whether or not the player is within bounds and keeps
    // them there
    // console.log(objectBorder);
    if ((playerBorder.top < topBorder + buffer &&
        playerBorder.left < leftBorder + buffer) &&
        (playerBorder.bottom > bottomBorder - buffer &&
        playerBorder.right > rightBorder - buffer)
       )
    {
        // return true;
        console.log("hi");
    }
    // return false;
}
// actual game logic
function animate(currentTime)
{
    let deltaTime = 0;
    if (prevTime === 0)
    {  
        deltaTime = 0;
    } else
    {
        deltaTime = (currentTime - prevTime) / 1000;
    }
    playerWalk(deltaTime);
    checkBorder();
    // isTouchingObject(coin1);
    // updates player position if outside bounds hit
    player.style.top = Player.y + "px";
    player.style.left = Player.x + "px";
    prevTime = currentTime;
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);