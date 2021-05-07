
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

function preload(){
d=loadImage("dustbingreen.png")

}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	d1=new dustbin(1200,550,10,220)
	d2=new dustbin(1350,550,10,220)
	ball=new ball(200,650)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  d1.display();
	d2.display()
	ball.display()
	image(d,1190,420,170,250)
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(ball.b,ball.b.position,{x:105,y:-80})
	}
}

