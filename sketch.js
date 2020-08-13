
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = new Ball (200,450,40);	
dustbin = new Dustbin(1000,650);
ground = new Ground (width/2,670,1600,20);
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  ground.display();
  ball.display();
 }



