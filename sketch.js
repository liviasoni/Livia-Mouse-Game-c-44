var bgImg;
var girl,girlImg;
var mouse1,mouse2,stone;
var gun,bullet;
var cheese,coin,bg2,mouse,bg2Img;

function preload() {
bgImg = loadImage("assets/Mouseworld.png");
girlImg = loadAnimation("assets/Girl/g3.png","assets/Girl/g5.png","assets/Girl/g6.png",
"assets/Girl/g7.png","assets/Girl/g8.png");
mouse1 = loadAnimation("assets/Mouse1/m1.png","assets/Mouse1/m2.png","assets/Mouse1/m3.png","assets/Mouse1/m4.png",
"assets/Mouse1/m5.png","assets/Mouse1/m6.png","assets/Mouse1/m7.png");
mouse2 = loadAnimation("assets/Mouse2/mo1.png","assets/Mouse2/mo2.png","assets/Mouse2/mo3.png",
"assets/Mouse2/mo4.png","assets/Mouse2/mo5.png","assets/Mouse2/mo6.png");
gun = loadImage("assets/gunImg/gunBtn.jpg");
bullet = loadImage("assets/gunImg/Bullet.jpg");
cheese = loadImage("assets/Cheese.jpg");
coin = loadImage("assets/Coin/coin.jpeg");
bg2Img = loadImage("assets/jungle.jpg");
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  bg2 = createSprite(width/2+100,height/2,width,height);
bg2.addImage(bg2Img);
bg2.scale = 1.25;

  
bg = createSprite(width/2,height/2,width,height);
bg.addImage(bgImg);
bg.scale = 1.25;
bg.velocityX = -2;


girl = createSprite(200,500, 50,350);
girl.addAnimation("running",girlImg);
girl.scale = 2.25;

}


function draw() {
  background(0); 
  
  if (bg.x<width/2-50) {
bg.x = width/2;

  }
spawnMouse();
  drawSprites();
}

function spawnMouse(){
if(frameCount%150 === 0){
  mouse = createSprite(width,570,100,300)
  mouse.velocityX = -5;
  mouse.addAnimation("mouse1",mouse1);
  mouse.addAnimation("mouse2",mouse2);
  var rand = Math.round(random(1,2))
  if(rand === 1) {
  mouse.changeAnimation("mouse1");
}
else{
mouse.changeAnimation("mouse2");
mouse.y = 580;
}
}


}