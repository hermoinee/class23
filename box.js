class Box {

    constructor (x,y,width,height) {
      var box_options ={
          isStatic: false,
          restitution : 0.8,
          friction :0.3,
          density : 1.0
      }
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
       this.box= Bodies.rectangle(x,this.y,this.width,this.height,box_options);
      World.add(world,this.box);
  
    }
    display () {
      var pos = this.box.position;
      var angle = this.box.angle;
      push () ;
      translate (pos.x,pos.y);
      rotate (angle);
      
      fill ("blue");
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop () ;
  
    }
  
  }