var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"




function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  doorsGroup = new Group();
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(150,150,);
  ghost.addImage("ghost",ghostImg);
  ghost.velocityY = 1
  ghost.scale = 0.3

}

function draw() {
  background(200);



if(gameState === "play"){
  
  if(tower.y > 400){
    tower.y = 300
  }

  
  if(keyDown("space")&& ghost.y >= 100) {
    ghost.velocityY = -12;
  }

  ghost.velocityY = ghost.velocityY + 0.8

  if(keyDown("right_arrow")) {
    ghost.x = ghost.x + 5
  }

  if(keyDown("left_arrow")) {
    ghost.x = ghost.x - 5
  }

  
  
  if(doorsGroup.isTouching(ghost)){
    gameState="end";
  }

  spawnDoors();
  drawSprites();
}

    if(gameState=="end"){
      text("gam3 0v3r Presione la letra R",250,250);


      if(keyDown("R")){
        gameState = "play";   
      }

    }
    
    

  }

function spawnDoors() {

if (frameCount % 60 === 0) {
  door = createSprite(300,100,20,7);
 door.x = Math.round(random(100,500));
 door.addImage(doorImg);
 door.scale = 0.5;
 door.velocityY = +3;

 doorsGroup.add(door);



}
}


