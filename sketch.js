var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor ="green";
  movingRect = createSprite(200,200,50,50);
  movingRect.shapeColor= "green";
}

function draw() {
  background(0);  
  console.log(movingRect.x - fixedRect.x);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x - fixedRect.x <
     fixedRect.width/2 + movingRect.width/2 && 
     fixedRect.x - movingRect.x < fixedRect.width/2 +
     movingRect.width/2){
      fixedRect.shapeColor = "red";
      movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor ="green";
    movingRect.shapeColor= "green";
  }


  drawSprites();
}