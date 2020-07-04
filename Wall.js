class Wall {
    constructor(y) {
      
      this.body = Bodies.rectangle(1550,y,37.5,75);
      this.width = 37.5;
      this.height = 75;
      this.x = 1550;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };

