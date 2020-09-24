const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload(){
}

function setup() {
  createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground  = new Ground(600,350,7000,30);
  paper   = new Paper(100,150,70);
  vbox1   = new Dustbin(585,240,20,170);
	vbox2   = new Dustbin(695,240,20,170);
	hbox    = new Dustbin(640,323,130,20);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  
ground.display();  
paper.display();
vbox1.display();
vbox2.display();
hbox.display();

  drawSprites();
 
}

function keyPressed() {
   if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55});
   }

}