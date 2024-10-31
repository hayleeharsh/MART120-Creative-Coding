var bleyeX = 175;
var bleyeY = 160;
var bleyeDirection = 4;

var breyeX = 250;
var breyeY = 160;
var breyeDirection = 3;

var wleyeY = 160;
var wleyeDirection = 3;

var wreyeY = 160;
var wreyeDirection = 5;

var hairX = 75;
var hairY = 75;
var hairDirection = 4;

var size = 18;
var count = 0;
var sizeDirection = 2;


function setup() {
  createCanvas(400,400);
}

function draw() {
  background(149, 201, 141);


 //hair
 fill(250, 220, 71)
 rect(hairX,hairY,250,300);
hairY += hairDirection;
 if(hairY <= 0 || hairY >= 200 )
 {
     hairDirection *= -1;
 }
 hairX += hairDirection;
 if(hairX <= 0 || hairX >= 200 )
 {
     hairDirection *= -1;
 }
  //head
  fill(255, 228, 179)
  circle(200,200,220);

  //eyes
  //white parts
  fill(255, 255, 255)
  ellipse(250,wreyeY,60,50);
  wreyeY += wreyeDirection;
  if(wreyeY <= 0 || wreyeY >= 300 )
  {
      wreyeDirection *= -1;
  }
  ellipse(175,wleyeY,60,50);
  wleyeY += wleyeDirection;
  if(wleyeY <= 0 || wleyeY >= 300 )
  {
      wleyeDirection *= -1;
  }

  //black
  fill(0, 0, 0)
  ellipse(breyeX,breyeY,25,20);
  breyeX+=breyeDirection;
  if(breyeX >= 300 || breyeX <= 100)
  {
    breyeDirection *= -1;
  } 
  ellipse(bleyeX,bleyeY,25,20);
  bleyeX+=bleyeDirection;
  if(bleyeX >= 300 || bleyeX <= 100)
  {
    bleyeDirection *= -1;
  } 


  //nose
  fill(255, 228, 179)
  triangle(200, 215, 215, 175, 250, 215);

  //mouth
  line(200, 240, 260, 240);

  //eyebrows
  line(150, 130, 175, 130);
  line(225, 130, 250, 110);

  //freckles
  point(150, 200);
  point(140, 210);
  point(165, 205);
  point(250, 200);
  point(265, 210);
  point(275, 205);


  fill(255, 255, 255)
  textSize(size);
  size+= sizeDirection;
  count++;
  if(count > 5)
  {
      sizeDirection *=-1;
      count = 0;
  }
    text('Haylee Harshbarger', 195, 395);
}