var pitch,batsman,ball,bowler,f1,f2,f3,w1,w2;
var batsmanImg,ballImg,bowlerImg,fielderImg,wicketImg;
var e;

function preload(){
   batsmanImg = loadImage("batsmanImg.png")
   ballImg = loadImage("ball.png")
   bowlerImg = loadImage("bowler.png")
   fielderImg = loadImage("fielder.png")
   wicketImg = loadImage("wickets.png")
  
}



function setup() {
  createCanvas(1250,500);

  // fielder1
   f1 = createSprite(1200,250,30,30);
   f1.addImage(fielderImg);
   f1.scale = 0.17;

  //  fielder2
   f2 = createSprite(800,530,30,30);
   f2.addImage(fielderImg);
   f2.scale = 0.17;

 // fielder3
   f3 = createSprite(100,530,30,30)
   f3.addImage(fielderImg);
   f3.scale = 0.17;

 //  batsman
  batsman = createSprite(910,240,30,30);
  batsman.addImage(batsmanImg)
  batsman.scale = 0.17;
 

// bowler
  bowler = createSprite(100,150,30,30);
  bowler.addImage(bowlerImg)
  bowler.scale = 0.17;
  bowler.velocityX = 5
// wickets
  w1 = createSprite(980,240,5,30);
  w1.addImage(wicketImg)
  w1.scale = 0.17;

  
  w2 = createSprite(80,240,5,30);
  w2.addImage(wicketImg)
  w2.scale = 0.17;

  
}

function draw() {
  background(220);
  
  fill("#b5651d")
  rect(80,90,900,300)
  strokeWeight(6)
  stroke(220)
  line(200,90,200,390)
  line(850,90,850,390)
  line(60,160,200,160)
  line(60,320,200,320)
  line(850,320,1000,320) 
  line(850,160,1000,160) 
  
  if(keyIsDown(UP_ARROW)){
  batsman.y = batsman.y-10
 }
 if(keyIsDown(DOWN_ARROW)){
  batsman.y = batsman.y + 10
}
  if(keyIsDown(RIGHT_ARROW)){
    batsman.x = batsman.x + 10
  }
  if(keyIsDown(LEFT_ARROW)){
    batsman.x = batsman.x - 10
  }
  
  
  
  drawSprites()
}

function keyPressed(){

if(keyCode===32){
batsman.x = batsman.x + 5


}






}