class Dustbin {
    constructor(x, y,width,height) {
      var options = {
          isStatic:true
          //this.image = loadImage("sprites/bird.png");
      }
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push(); 
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      pop(); 
    }
  };