var bgImg;
var cat1, cat2, cat3, cat4;
var mouse1, mouse2, mouse3, mouse4;


function preload() {
    //load the images here
    bgImg = loadImage("garden.png");

    cat1 = loadImage("cat1.png");
    cat2 = loadImage("cat2.png");
    cat3 = loadImage("cat3.png");
    cat4 = loadImage("cat4.png");

    mouse1 = loadImage("mouse1.pmg");
    mouse2 = loadImage("mouse2.png");
    mouse3 = loadImage("mouse3.png");
    mouse4 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    cat1 = createSprite("800,600");
    cat1.addAnimation("catSitting", cat2);
    cat1.scale = 0.15;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    

    if(cat1.x - mouse1.x < (cat1.width - mouse1.width)/2)
    { 
        cat1.velocityX=0;
        cat1.addAnimation("catLastImage", catImg4);
        cat1.x =300;
        cat1.changeAnimation("catLastImage");

        mouse1.addAnimation("mouseLastImage", mouseImg4);
        mouse1.changeAnimation("mouseLastImage");
    }  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
        cat1.velocityX = -5; 
        cat1.addAnimation("catRunning", catImg3);
        cat1.changeAnimation("catRunning");
        
        mouse1.addAnimation("mouseTeasing", mouseImg3);
        mouse1.changeAnimation("mouseTeasing");
  }

  if(keyCode === RIGHT_ARROW){
      mouse1.addAnimation("mouseTeasing", mouse3);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;

  }
}
