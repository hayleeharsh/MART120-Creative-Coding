function setup() {
  createCanvas(400,400);
}

function draw() {
  background(149, 201, 141);


 //hair
 fill(250, 220, 71)
 rect(75,75,250,300);

  //head
  fill(255, 228, 179)
  circle(200,200,220);

  //eyes
  fill(255, 255, 255)
  ellipse(250,160,50,40);
  ellipse(175,160,50,40);
  fill(56, 124, 31)
  ellipse(250,160,25,20);
  ellipse(175,160,25,20);
  fill(0, 0, 0)
  ellipse(250,160,12.5,10);
  ellipse(175,160,12.5,10);
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
  textSize(18);
    text('Haylee Harshbarger', 225, 395);
}