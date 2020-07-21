var Engine = Matter.Engine,
    World = Matter.World,
    Bodies= Matter.Bodies;


    var engine,world;
    var raindrops = [];

function setup(){

  createCanvas (400,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
}

function mousePressed(){
  raindrops.push(new Raindrop(mouseX,mouseY,10,10))

}

function draw(){
  for (var i = 0; i<raindrops.radius;i++){

raindrops[i].show();
  }
}

function Raindrop(x,y,options){
  var options = {
    'restitution':0.8,
    'friction':0.3,
    'density':1.0
  }
this.body = Bodies.circle(x,y,10,options);

World.add(world,this.body)


this.show = function(){
  var pos = this.body.position;
  push()
  translate(pos.x,pos.y)
  circle(0,0,10);
  pop()
}
Engine.update(engine);
}






