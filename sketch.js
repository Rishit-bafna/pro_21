var wall,thickness;
var bullet,speed,speed1,weight;

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1500, 200,thickness, height/2);
  bullet=createSprite(0,200,70,20);
  speed=random (233,321);
 weight=random(30,52);
  thickness=random(22,83);
  speed1=random(233,321);
  //bullet.velocityX=speed1 
  bullet.velocityX=speed;
}

function draw() {
  background("black");  
 
  drawSprites();
 
 if(hadCollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

   if(damage>10){
     wall.shapeColor=color("red")
   }

   if(damage<10){
     wall.shapeColor=color("green")
   }
 }
  


}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
    return false;
}
