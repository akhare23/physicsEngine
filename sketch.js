//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;

function setup() {
  createCanvas(400,400);


  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
  }

  ground = Bodies.rectangle(200,380,400,20, options);
  World.add(world, ground);

  var optionsBall = {
    restitution:1
  }

  ball = Bodies.circle(200,200,30, optionsBall)
  World.add(world,ball);

  console.log(ball);
}

function draw() {
  background(0);  

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
}