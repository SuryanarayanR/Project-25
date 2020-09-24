class Paper {
  constructor(x, y,radius) {
    var options = {
        isStatic:false,
        'restitution':0.6,
        'friction':0.8,
        'density':0.5
      } 
    this.body = Bodies.circle(x, y,radius/2,options);
    this.radius = radius;
    World.add(world, this.body);
    this.image = loadImage("paper.png")  
    }
  
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push(); 
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    
    pop(); 
  }
};
