class Ground {

  constructor (x,y,width,height) {
    var ground_options ={
        isStatic: true
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
     this.ground = Bodies.rectangle(x,this.y,this.width,this.height,ground_options);
    World.add(world,this.ground);

  }
  display () {
    fill ("brown");
    rectMode(CENTER);
    rect(this.ground.position.x,this.ground.position.y,this.width,this.height);

  }

}