var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var garlicImg, garlic, garlicsGroup;
var vampire, vampireImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var invisibleBlock2, invisibleBlockGroup2;


function preload(){
    towerImg = loadImage("tower.png");
    doorImg = loadImage("door.png");
    climberImg = loadImage("climber.png");
    vampireImg = loadImage("vampire.png");
    garlicImg = loadImage("garlic.png");
    
}

function setup() {
    createCanvas(600, 600);
    tower = createSprite(300,300);
    tower.addImage("tower",towerImg);
    tower.velocityY = 4;
    doorsGroup=new Group();
    climbersGroup=new Group();
    invisibleBlockGroup=new Group();
    garlicsGroup=new Group();
    invisibleBlockGroup2=new Group();
    vampire=createSprite(70,500);
    vampire.scale=0.25;
    vampire.addImage("vampire",vampireImg);
}

function draw() {
    background(0);
  
    if(gameState==="play"){
  
    if(tower.y > 400){
        tower.y = 300
      }
    vampire.x = World.mouseX;

      //ghost.velocityY=ghost.velocityY+0.8;
      //if(keyDown("left_arrow")){
       // ghost.x=ghost.x-3;
      //}
      //if(keyDown("right_arrow")){
        //ghost.x=ghost.x+3;
      //}
    }
      //if(climbersGroup.isTouching(ghost)){
        //ghost.velocityY=0;
    
    
        spawnDoors();
        spawnGarlic();
        drawSprites();    
        
        if(invisibleBlockGroup.isTouching(vampire)||vampire.y>600){
            vampire.destroy();
            gameState="end";
        } 
        
        if(climbersGroup.isTouching(vampire)){
            vampire.velocityY=0;
        }

        if(invisibleBlockGroup2.isTouching(vampire)||vampire.y>600){
            vampire.destroy();
            gameState="end";
        } 
        
        if(garlicsGroup.isTouching(vampire)){
            vampire.velocityY=0;
        }
      
      if(gameState==="end"){
        fill("yellow");
          stroke("yellow");
         textSize(30);
         text("Game Over",230,300);
         //tower.velocityY=0;
         //door.velocityY=0;
         //climber.velocityY=0;
         //invisibleBlockGroup=0;
         tower.destroyEach;
         door.destroyEach;
         garlic.destroyEach;
         invisibleBlock.destroyEach;
         invisibleBlock2.destroyEach;
         vampire.destroyEach;
       }
 
}

function spawnDoors(){
    if(frameCount%240===0){
      var door=createSprite(200,-50);
      var climber=createSprite(200,10);
      var invisibleBlock = createSprite(200,15);
      invisibleBlock.width=climber.width;
      invisibleBlock.height=2;
      door.x=Math.round(random(120,400));
      climber.x=door.x;
      invisibleBlock.x=door.x;
      door.addImage(doorImg);
      climber.addImage(climberImg);
      door.velocityY=4;
      climber.velocityY=4;
      invisibleBlock.velocityY=4;
      door.lifetime=800;
      climber.lifetime=800;
      invisibleBlock.lifetime=800;
      doorsGroup.add(door);
      invisibleBlockGroup.add(invisibleBlock);
      climbersGroup.add(climber);
      invisibleBlock.debug=true;
      door.depth=vampire.depth;
      vampire.depth+=1;
  
  
  
    }
}

    function spawnGarlic(){
        if(frameCount%200===0){
          var garlic=createSprite(200,-50);
          garlic.scale=0.18;
          //var climber=createSprite(200,10);
          var invisibleBlock2 = createSprite(200,15);
          invisibleBlock2.width=garlic.width;
          invisibleBlock2.height=2;
          garlic.x=Math.round(random(120,400));
          //climber.x=door.x;
          invisibleBlock2.x=garlic.x;
          garlic.addImage(garlicImg);
          //climber.addImage(climberImg);
          garlic.velocityY=4;
          //climber.velocityY=4;
          invisibleBlock2.velocityY=4;
          garlic.lifetime=800;
          //climber.lifetime=800;
          invisibleBlock2.lifetime=800;
          garlicsGroup.add(garlic);
          invisibleBlockGroup2.add(invisibleBlock2);
          //climbersGroup.add(climber);
          invisibleBlock2.debug=true;
          garlic.depth=vampire.depth;
          vampire.depth+=1;
      
      
      
        }
  }
  