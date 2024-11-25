//character var
var characterX = 50;
var characterY = 50;

//key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//shapes X Y
var shapeX = 50;
var shapeY = 50;
var shapeXs = [];
var shapeYs = [];
var shapeXSpeed = [];
var shapeYSpeed = [];

var diameters = [];
var shapeColors = [];

//mouse clicked var
var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(600, 600);
    //speed
   
    for (var i = 0; i < 50; i++) {
        shapeXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(600);
        shapeYs[i] = getRandomNumber(500);
        diameters[i] = getRandomNumber(30);
        shapeColors[i] = color(random(255), random(255), random(255));
    }
    createCharacter(50,50);
}

function draw()
{
    background(78,155,255);
    stroke(40,80,132);
    fill(40,80,132);

    //sandy beach
    fill(203, 200, 107)
    rect(540,540,115,115);

    //borders
    createBorders(15);

    for (var i = 0; i < shapeXs.length; i++) {
        fill(shapeColors[i]);
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
         // move the shape
         shapeXs[i] += shapeXSpeed[i];
         shapeYs[i] += shapeYSpeed[i];
         // check to see if the shape has gone out of bounds
         if (shapeXs[i] > width) {
             shapeXs[i] = 0;
         }
         if (shapeXs[i] < 0) {
             shapeXs[i] = width;
         }
         if (shapeYs[i] > height) {
             shapeYs[i] = 0;
         }
         if (shapeYs[i] < 0) {
             shapeYs[i] = height;
         }
    }


   //Shore function
    createShore()

    //blood in the water function   
    mouseClick()

    //createCharacter;
    drawCharacter();
    characterMovement();

    //win message function
    winMessage()

}

function mouseClick()
{
    // blood in the water on mouseclick
    fill(204,0,0);
    circle(mouseShapeX, mouseShapeY, 10);
}

//shore function - exit function
function createShore()
{
        textSize(16);
        fill(0);
        stroke(0);
        text("SHORE", width-60,height-40);
}

//aswd movement
function characterMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}

function drawCharacter()
{
    fill(0,255,0);
    circle(characterX,characterY,25);
}
function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-50);
}

//function for drawing
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function winMessage()
{
    // win screen
    if(characterX > width && characterY > width-50)
        {
            fill(0);
            stroke(5);
            textSize(26);
            text("You Survived!", width/2-100, height/2-50);
        }
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}