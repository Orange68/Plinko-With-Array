const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
Bodies.circle;

var plinko, plinko2, plinko3, plinko4, plinko5, plinko6, plinko7, plinko8, plinko9, plinko10, plinko11, plinko12, plinko13, plinko14, particle, division, division2, division3, division4, division5, division6, division7, ground;

function setup() {
  createCanvas(480,800);
  ground=createSprite(460,790,1000,20);
  ground.shapeColor="white";
  division=createSprite(480,650,10,300);
  division.shapeColor="white";
  division2=createSprite(400,650,10,300);
  division2.shapeColor="white";
  division3=createSprite(320,650,10,300);
  division3.shapeColor="white";
  division4=createSprite(240,650,10,300);
  division4.shapeColor="white";
  division5=createSprite(160,650,10,300);
  division5.shapeColor="white";
  division6=createSprite(80,650,10,300);
  division6.shapeColor="white";
  division7=createSprite(0,650,10,300);
  division7.shapeColor="white";
  plinko=createSprite(100,100,20,20);
  plinko2=createSprite(200,100,20,20);
  plinko3=createSprite(300,100,20,20);
  plinko4=createSprite(400,100,20,20);
  plinko5=createSprite(150,200,20,20);
  plinko6=createSprite(250,200,20,20);
  plinko7=createSprite(350,200,20,20);
  plinko8=createSprite(100,300,20,20);
  plinko9=createSprite(200,300,20,20);
  plinko10=createSprite(300,300,20,20);
  plinko11=createSprite(400,300,20,20);
  plinko12=createSprite(150,400,20,20);
  plinko13=createSprite(250,400,20,20);
  plinko14=createSprite(350,400,20,20);

}

function draw() {
  background(0); 
  SpawnParticles();
  drawSprites();
}

function SpawnParticles(){
if(frameCount%60==0){
particle.push(new particle(random(width/2-10, width/2+10), 10,10));
}
}