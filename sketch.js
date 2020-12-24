var background_Image;
var ground, groundImage;
var mario, marioImage;
var cloud1, cloud2;
var redCactus, greenCactus;
var longBrick, smallBrick;
var coinImg;
var longStairs, Stairs2, Stairs3;

function preload(){
background_Image = loadImage("marioImages/background.jpg");
groundImage = loadImage("marioImages/ground.png")
marioImage = loadAnimation("marioImages/mario1.png", "marioImages/mario2.png");
cloud1 = loadImage("marioImages/cloud1.png");
cloud2 = loadImage("marioImages/cloud2.png")
redCactus = loadImage("marioImages/Rcactus.png");
greenCactus = loadImage("marioImages/Gcactus.png");
longBrick = loadImage("marioImages/bricks.jpg");
smallBrick = loadImage("marioImages/brick2.png");
questionBrick = loadImage("marioImages/question.jpg");
coinImg = loadAnimation("marioImages/coin1.png","marioImages/coin2.png","marioImages/coin3.png","marioImages/coin4.png","marioImages/coin5.png","marioImages/coin6.png");
longStairs = loadImage("marioImages/longStairs.png");
Stairs2 = loadImage("marioImages/st2.png");
Stairs3 = loadImage("marioImages/st3.png");
}

function setup() {
  createCanvas(1000,580);
  
  ground = createSprite(500, 580, 100000000, 20);
  ground.addImage(groundImage);
  ground.scale = 1.4;
  ground.velocityX = -7;
  ground.x = ground.width/2;

  mario = createSprite(90, 495, 20, 20);
  mario.addAnimation("running", marioImage);
  mario.scale = 0.4;
  //console.log(mario.y);
  mario.setCollider("rectangle", 0, 0, 110,180);
}

function draw() {
  background(background_Image);  

  if(ground.x < 0){
    ground.x = ground.width/2;
  }

  if(keyDown("SPACE")&&mario.y > 100){
    mario.velocityY = -14;
  }

  mario.velocityY = mario.velocityY + 0.8;

  mario.collide(ground); 

  //mario.debug = true;

  spawnClouds();
  spawnCactus();
  spawnBricks();
  spawnCoins();
  spawnStairs();

  drawSprites();
}

function spawnClouds() {
  if(frameCount % 60 === 0) {
    var cloud = createSprite(1000,Math.round(random(100, 165)),10,40);
    cloud.velocityX = -7;
    
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: cloud.addImage(cloud1);
              break;
      case 2: cloud.addImage(cloud2);
              break;
      default: break;
    }
    
    cloud.scale = 1.5;
    cloud.lifetime = 300;
   
  }
}

function spawnCactus() {
  if(frameCount % 140 === 0) {
    var cactus = createSprite(1000,510,10,40);
    cactus.velocityX = -7;
    
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: cactus.addImage(redCactus);
              break;
      case 2: cactus.addImage(greenCactus);
              break;
      default: break;
    }
    
    cactus.scale = 2;
    cactus.lifetime = 300;
   
  }
}

function spawnBricks() {
  if(frameCount % 120 === 0) {
    var brick = createSprite(1000,Math.round(random(270, 305)),10,40);
    brick.velocityX = -7;
    
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: brick.addImage(longBrick);
              break;
      case 2: brick.addImage(smallBrick);
              break; 
      case 3: brick.addImage(questionBrick);
              break;       
      default: break;
    }
    
    brick.scale = 1;
    brick.lifetime = 300;
   
  }
}

function spawnCoins(){
  if(frameCount % 80 === 0){
    var coin = createSprite(1000, Math.round(random(315, 510)),10,40);
    coin.addAnimation("reward", coinImg);
    coin.velocityX = -7;
    coin.scale = 1;
    coin.lifetime = 300;
  }
}

function spawnStairs() {
  if(frameCount % 300 === 0) {
    var stairs = createSprite(1000,440,10,40);
    stairs.velocityX = -7;
    
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: stairs.addImage(Stairs2);
              break; 
      case 2: stairs.addImage(Stairs3);
              break;       
      default: break;
    }
    
    stairs.scale = 1;
    stairs.lifetime = 300;
   
  }
}
