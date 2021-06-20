//declared variables
var frogimg;
var frog,paddle,ground;
var edges , bgImg; 


function preload(){
  frogimg=loadImage("frog1.png");
  bgImg = loadImage("bg.jpg");
}


function setup(){

  createCanvas(500,600);
  //x,y,width and hieght of created sprites
  frog = createSprite(250,560);
  frog.addImage("jumping",frogimg);
  frog.scale = 0.12;

  ground= createSprite(200,585,600,10);
  ground.velocityX = -2;
  
}
  
  
function draw() {
  //background color of the game 
  background(bgImg);
  
  if(keyDown("space")){
    frog.velocityY = -10;
  }

  frog.velocityY = frog.velocityY+0.5;

  if(ground.x<0){
    ground.x = ground.width/2;
  }

  edges = createEdgeSprites();
  frog.collide(ground);
   

  paddles();
  //sprites are drawn
  drawSprites();
    
}

function paddles(){

  if(frameCount %60===0)
  {
    paddle = createSprite(550,550,70,10);
    paddle.velocityX = -3;
    paddle.y = Math.round(random(200,500));
  }
}
  