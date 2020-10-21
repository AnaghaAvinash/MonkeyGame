
var monkey , monkey_running
var banana ,bananaImage
var obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime = 0;
var colour,colourImage

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  colourImage = loadImage("color.png");
  
}

function setup() {
  createCanvas(400,400);
  colour = createSprite(200,200);
  colour.addImage("back",colourImage);
  colour.scale=2;
  
  monkey = createSprite(50,315);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground=createSprite(200,350,400,10);
  ground.x = ground.width /2;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
 
}


function draw() {
  
   background(" green");
  
if(keyDown("space")&& monkey.y>=200){
  monkey.velocityY = -15;
  
 }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  food();
  obstacles();
  
  drawSprites();
    
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+survivalTime,200,50);
  
}

function food(){
  
  if(frameCount % 60 === 0){
    banana = createSprite(200,200);
    banana.scale=0.1;
    banana.addImage("food",bananaImage);
    banana.y=Math.round(random(120,200));
    banana.velocityX = -4;
    banana.lifetime=100;
    FoodGroup.add(banana);
}
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(200,318);
    obstacle.addImage("hit",obstacleImage);
    obstacle.scale=0.15;
    obstacle.x=Math.round(random(120,400));
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  
}
}
                   





