var database;
var gameState=0;
var playerCount;
var back,backimg;
var canvas;
var distance=0;
var car ,carImage;
var track,trackimg;
var backgroundimg;
function preload(){
     carImage=loadImage("images/bike.jpg");
     trackimg=loadImage("images/track.jpg");
     backgroundimg=loadImage("images/ground.png")
}
function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-30);


    track=createSprite(100,1200,1,1);
    track.addImage(trackimg);
    car=createSprite(100,500,100,2);
    car.addImage(carImage);
    car.scale=0.2;
   camera.position.x=displayWidth/2;
    camera.position.y=car.y;
   // bike1=new bikes(600,599,100,1);    
    
}

function draw(){
    background(backgroundimg);
    //bike1.display();
drawSprites();
}
function keyPressed(){
    /*if(keyDown(LEFT_ARROW)){
        car.velocityX=-4;
      
      }
       if(keyDown(RIGHT_ARROW)){
       car.velocityX=4;
      
      }*/
       if(keyDown(UP_ARROW)){
       car.velocityY=-4;
     
      }
      /* if(keyDown(DOWN_ARROW)){
      car.velocityY=4;
      
      }*/
}

