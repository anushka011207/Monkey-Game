
var monkey , monkey_running
var banana, bananaImage, obstacle, obstacleImage
var foodGroup; 
var obstacleGroup;
var ground, groundImage, invisibleGround;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(30,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,350,900,10);
  ground.velocityX = -3;
  
  invisibleGround = createSprite(200,350,400,10);
  invisibleGround.visible = false;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  
  survivalTime = Math.round(frameCount/frameRate());
  text("Survival Time = "+survivalTime,100,50)
  
  if(keyDown("space")) {
        monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  ground.x = ground.width/2;
  
  food();
  
  obstacles();
  
  drawSprites();
  
  monkey.collide(invisibleGround);
}


function food()  {
  if(World.frameCount % 80 === 0)  {
    banana = createSprite(400,200,10,10);
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200));
    banana.velocityX = -3;
    banana.lifetime = 135;
    foodGroup.add(banana);
  }
}

function obstacles()  {
  if(World.frameCount % 300 === 0)  {
    obstacle = createSprite(400,315,30,30);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    obstacle.lifetime = 135;
    obstacleGroup.add(obstacle);
  }
}
