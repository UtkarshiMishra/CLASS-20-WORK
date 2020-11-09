var mr,fr;

function setup() {
  createCanvas(800,400);
  mr = createSprite(200, 400, 50, 50);
  fr = createSprite(200,100,50,50)
  mr.velocityY = -5;
  fr.velocityY = 5;
}

function draw() {
  background(0); 
 // mr.x = World.mouseX;
 // mr.y = World.mouseY;
if (mr.x - fr.x < fr.width/2 + mr.width /2 
  && fr.x - mr.x < fr.width/2 + mr.width /2) {
    mr.velocityX = mr.velocityX * (-1)
    fr.velocityX = fr.velocityX * (-1)
  } 
  if( fr.y - mr.y < fr.height/2 + mr.height/2
  && mr.y - fr.y < fr.height/2 + mr.height/2) {
    mr.velocityY = mr.velocityY * (-1)
    fr.velocityY = fr.velocityY * (-1) 
  }
 // mr.shapeColor = "red";
//  fr.shapeColor = "red";

//else {
  //mr.shapeColor = "green";
  //fr.shapeColor = "green";
//}

  drawSprites();
}