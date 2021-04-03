
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var b1, g1, b2, b3, b4, b5,r1,r2,r3,r4,r5;
function preload() {
                                          
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	b1 = new bob(340, 300, 60);
	g1 = new ground(400, 150, windowWidth / 2, 20);
	b2 = new bob(400, 300, 60)
    b3 = new bob(460,300,60);
    b4 = new bob(520,300,60);
    b5 = new bob(280,300,60);
	r1= new slingshot(b1.body,g1.body,0,0)
	Engine.run(engine);

}


function draw() {

	console.log(mouseX + " " + mouseY)

	rectMode(CENTER);
	background("white");

	drawSprites();

	b1.display();
	g1.display();
	b2.display();
	b3.display();
    b4.display();
	b5.display();

}



