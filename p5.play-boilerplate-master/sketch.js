const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,world;
var box1,box2,box3,box4,box5,pig1,pig2,bird,log1,log2,log3,log4;
var ground;

function setup(){
var canvas=createCanvas(1200,400);
engine=Engine.create();
world=engine.world;
box1= new Box(700,320,70,70);
box2= new Box(920,320,70,70);
box3= new Box(700,240,70,70);
box4= new Box(920,240,70,70);
box5= new Box(810,160,70,70);
ground= new Ground(600,390,1200,20);
pig1= new Pig(810,350,50,50);
pig2= new Pig(810,220,50,50);
bird= new Bird(100,100,50,50);
log1= new Log(810,260,20,300,PI/2);
log2= new Log(810,180,20,300,PI/2);
log3= new Log(760,120,20,150,PI/7);
log4= new Log(810,120,20,150,-PI/7);
}

function draw(){
background(0);
Engine.update(engine);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
ground.display();
pig1.display();
pig2.display();
bird.display();
log1.display();
log2.display();
log3.display();
log4.display();
}