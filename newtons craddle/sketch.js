
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1;
function setup(){

createCanvas(1200,400);

engine=Engine.create();
world=engine.world;
 b1 = new bob (600,100,25)
Engine.run(engine)

}

function draw(){
rectMode(CENTER);
background("blue");
console.log(mouseX+" , "+mouseY)
Engine.update(engine);
b1.display();

}