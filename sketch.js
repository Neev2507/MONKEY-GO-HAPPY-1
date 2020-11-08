var survivaltime;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var backgroundimage

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

 
}



function setup() {
  createCanvas(600,600)
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  
  
}


function draw() {
 
 background("white");
   stroke("white");
 textSize(24);
 text("score:"+score,500,50);
 
  
 stroke("black");
 textSize(20);
 fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("survival Time:" + survivaltime,100,50);
 
     if(ground.x < 0){
    ground.x =ground.width /2;
    }
  obstacles();
  drawSprites();
}
function obstacles(){
   if (frameCount % 300 === 0){
   var obstacle = createSprite(400,330,10,40);
   obstacle.velocityX = -6;
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.1;
   }
 
}





