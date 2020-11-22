
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, side1,side3,side3, paper

function preload()
{
	
}

function setup() {
	createCanvas(1200, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(625, 500,1200,20)

	side1 = new DustPan(1110, 415,105,25)
	side2 = new DustPan(890, 415,105,25)
	side3 = new DustPan(1000, 480,25,230)

	paper = new Paper(200,300,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
 

  side1.display();
  side2.display();
  side3.display();
  
  paper.display()



  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position, {x:105, y:-45})
		
		
	}

	
}
