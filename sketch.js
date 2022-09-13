var sea, seaMove, sea_image;
var ship, shipNavegated, shipMove;

function preload(){
seaMove.loadImage("sea.png");
shipNavegated.loadAnimation("ship-2.png","ship-4.png","ship-2.png","ship-3.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200,20,20);
  sea.addImage("image", seaMove);
  ship = createSprite(150,200,20,20);
  ship.addAnimation("Move", shipNavegated);

  sea.scale = 0.5;
  ship.scale = 0.5;

  sea.velocityX= 10;
  sea.x=sea.width/2;
}

function draw() {
  background("blue");
 
  if(sea.x <0){
    sea.x=sea.width/2;
  }

  drawSprites();
}