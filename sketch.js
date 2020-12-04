var ground;
var dustbin1, dustbin2, dustbin3;

var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	
    var ground_options ={
        isStatic: true
	}
	
	ground = Bodies.rectangle(200,650,200,20, ground_options);
	World.add(world,ground);
	
	


	paper = new Paper(100,100);
	
	dustbin1 = new Dustbin(400,650);



	Engine.run(engine);
  
}


function draw() {
	background(0);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1500,20);

	paper.display();
	
	dustbin1.display();
    
  drawSprites();
 
}



