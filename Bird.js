class Bird {
  constructor(x,y, width, height){
    var options = { 
      restitution: 0.1, 
      friction: 0.8, 
      density: 1.5
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = 50;
    this.height = 50;

    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    World.add(world, this.body)
    this.trajectory =[];
    this.Visibility = 255;
  

 

    
  }

  display() {
    
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    
    
    if(gameState === "onSling"){
      this.trajectory = [];
      this.Visibility = 255;
      Matter.Body.setAngle(this.body,0);
    }

    
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      push();
      this.Visibility = this.Visibility - 0.5;
      tint(255,this.Visibility);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }

    
  }
}
