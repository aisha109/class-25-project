class Raindrop{
constructor(x,y){
    var options = {
        'restitution':0.8,
        'friction': 0.3,
        'density':1.0
    }
this.body = Bodies.circle(x,y,10,options)
World.add(world,this.body);
}

display(){
    var pos = this.body.position;
    Push()
    translate(pos.x,pos.y)
    ellipseMode(CENTER);
    fill(225);
    circle(pos.x,pos.y);
        pop();
        

}









}