var cat, catImage1, catImage2, catImage3, catImage4;
var mouse, mImage1, mImage2, mImage3, mImage4;
var garden, gardenImage;

function preload() {
    catImage1 = loadAnimation("cat1.png");
    catImage2 = loadAnimation("cat2.png","cat3.png");
    catImage4 = loadAnimation("cat4.png");

    mImage1 = loadAnimation("mouse1.png");
    mImage2 = loadAnimation("mouse2.png","mouse3.png");
    mImage4 = loadAnimation("mouse4.png");

    gardenImage = loadImage("garden.png");

}
    
function setup(){
    createCanvas(1000,700);

    //garden = createSprite(750,200,1000,700);
    //garden.addImage("park",gardenImage);

    //create tom and jerry sprites here
    cat = createSprite(950, 650, 80, 50);
    cat.addAnimation("billi1",catImage1);
    cat.scale = 0.1;

    mouse = createSprite(50, 650, 20, 20);
    mouse.addAnimation("chuha1",mImage1);
    mouse.scale = 0.09;

    cat.debug = true;
    mouse.debug = true;

    cat.setCollider("rectangle",0,0,10,10);
    mouse.setCollider("rectangle",0,0,10,10);


}

function draw() {

    background(gardenImage);

    //Write condition here to eva,lute if tom and jerry collide
    text(mouseX , 'cat', mouseY, 10, 45);

    if(cat.x - mouse.x< cat.width/2 + mouse.width/2
       && mouse.x - cat.x< mouse.width/2 + cat.width/2 
       && cat.y - mouse.y< cat.height/2 + mouse.height/2
       && mouse.x - cat.x< mouse.height/2 + cat.height/2 ){
           cat.velocityX = 0;

        cat.addAnimation("billi3.0",catImage4);
        cat.changeAnimation("billi3.0",catImage4);
        mouse.addAnimation("chuha",mImage1);
        mouse.changeAnimation("chuha",mImage1);

    }
    
     drawSprites();

}

function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
  cat.velocityX = -3;
  cat.addAnimation("billi2.0",catImage2);
  cat.changeAnimation("billi2.0");
  mouse.addAnimation("chuha2",mImage2);
  mouse.frameDelay = 25;
  mouse.changeAnimation("chuha2");
  }

}