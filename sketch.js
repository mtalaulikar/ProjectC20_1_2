var car, wall;
var speed, weight;

function setup() {
  createCanvas(displayWidth,400);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(width - 200, 200, 60, height/2);
  car.velocityX = speed;

}

function draw() {
  background(255,255,255); 
  thresholdX = car.width/2 + wall.width/2;
 
  if(((wall.x - car.x) <= thresholdX) ){
    car.velocityX = 0;
    deformation = (0.5 * weight * speed * speed)/22500;
    if(deformation >= 180){
      car.shapeColor = "red";
    } else if(deformation >= 100) {
      car.shapeColor = "yellow";
    } else {
      car.shapeColor = "green";
    }

  } 
  drawSprites();
}
