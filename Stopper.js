class Stopper {
    constructor(y) {
      
      this.body = Bodies.rectangle(800,y,1600,15);
      this.width = 1600;
      this.height = 2;
      this.x = 800;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("white")
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };