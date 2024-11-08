//character var
var characterX = 50;
var characterY = 50;

//key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//shape1 var
var shapeX = 50;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

//shape 2 var
var shape2X = 50;
var shape2Y = 50;
var shape1XSpeed;
var shape2YSpeed;

//mouse clicked var
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(600, 600);
    //speed
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(50,50);
}
function draw()
{
    background(78,155,255);
    stroke(40,80,132);
    fill(40,80,132);
    
    createBorders(15);

    //sandy beach
    fill(203, 200, 107)
    rect(540,540,115,115);

    // Shore text
    textSize(16);
    fill(0);
    stroke(0);
    text("SHORE", width-60,height-40);
   

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // shark 1
    fill(192, 192, 192);
    // draw the shape
    rect(shapeX, shapeY, 25, 20);

     // speed
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

 // shark 2
 fill(128, 128, 128);
 
 // draw shape
 rect(shape2X, shape2Y, 20, 15);

  // speed
  shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);
  shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * -3)) + 1);

 // move shape
 shape2X += shape2XSpeed;
 shape2Y += shape2YSpeed;

 // bounds
 if(shape2X > width)
 {
     shape2X = 0;
 }
 if(shape2X < 0)
 {
     shape2X = width;
 }
 if(shape2Y > height)
 {
     shape2Y = 0;
 }
 if(shape2Y < 0)
 {
     shape2Y = height;
 }


// win screen
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Survived!", width/2-100, height/2-50);
    }

// blood in the water on mouseclick
    fill(204,0,0);
    circle(mouseShapeX, mouseShapeY, 10);
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

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
