//character vars
var characterX = 50;
var characterY = 50;
var characterWidth = 25; 
var characterHeight = 25;

//canvas vars
var canvasWidth = 1000;
var canvasHeight = 600;

//key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// Maze walls array
var walls = [];

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    createCharacter(50, 50);

    walls = [
        { x: 0, y: 100, w: 200, h: 15 },
        { x: 200, y: 200, w: 300, h: 15 },
        { x: 0, y: 300, w: 350, h: 15 },
        { x: 0, y: 400, w: 150, h: 15 },
        { x: 0, y: 200, w: 75, h: 15 },
        { x: 0, y: 500, w: 100, h: 15 },
        { x: 300, y: 400, w: 200, h: 15 },
        { x: 400, y: 100, w: 300, h: 15 },
        { x: 200, y: 500, w: 150, h: 15 },
        { x: 800, y: 100, w: 200, h: 15 },
        { x: 500, y: 500, w: 200, h: 15 },
        { x: 700, y: 350, w: 300, h: 15 },
        { x: 600, y: 200, w: 125, h: 15 },
        { x: 800, y: 450, w: 200, h: 15 },
        { x: 300, y: 0, w: 15, h: 200 },
        { x: 350, y: 400, w: 15, h: 200 },
        { x: 500, y: 300, w: 15, h: 115 },
        { x: 600, y: 100, w: 15, h: 300 },
        { x: 600, y: 500, w: 15, h:100 },
        { x: 700, y: 300, w: 15, h:150 },
        { x: 800, y: 550, w: 15, h:50 },
        { x: 850, y: 100, w: 15, h:150 }
    ];
}

function draw() {
    background(116, 176, 118);
    stroke(33, 105, 36);
    fill(33, 105, 36);

    // Outside borders
    createBorders(15);

    // Draw character
    drawCharacter();
    characterMovement();

    // Draw maze walls
    createMaze();

    // Draw gold
    drawGold();

    // Win if character touches gold
    if (dist(characterX, characterY, canvasWidth - 35, canvasHeight - 35) < 25) {
        winMessage();
        noLoop();
    }
}

function characterMovement() {
    let nextX = characterX;
    let nextY = characterY;

    if (keyIsDown(w)) {
        nextY -= 10;
    }
    if (keyIsDown(s)) {
        nextY += 10;
    }
    if (keyIsDown(a)) {
        nextX -= 10;
    }
    if (keyIsDown(d)) {
        nextX += 10;
    }

    //check for collision with maze walls
    if (!isColliding(nextX, nextY)) {
        characterX = nextX;
        characterY = nextY;
    }
}

//maze walls
function isColliding(x, y) {
    for (let wall of walls) {
        if (
            x + characterWidth / 2 > wall.x && // Right edge of character
            x - characterWidth / 2 < wall.x + wall.w && // Left edge of character
            y + characterHeight / 2 > wall.y && // Bottom edge of character
            y - characterHeight / 2 < wall.y + wall.h // Top edge of character
        ) {
            return true; // Collision detected
        }
    }
    return false; // No collision
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(204, 0, 102);
    circle(characterX, characterY, characterWidth);
}

function createBorders(thickness) {
    rect(0, 0, width, thickness); 
    rect(0, 0, thickness, height); 
    rect(0, height - thickness, width, thickness);
    rect(width - thickness, 0, thickness, height);
}

function winMessage() {
    fill(0);
    textSize(30);
    text("You got the gold!", width / 2 - 100, height / 2 - 50);
}

function drawGold() {
    fill(255, 255, 0);
    circle(canvasWidth - 35, canvasHeight - 35, 25);
}

function createMaze() {
    fill(33, 105, 36);
    for (let wall of walls) {
        rect(wall.x, wall.y, wall.w, wall.h);
    }
}
