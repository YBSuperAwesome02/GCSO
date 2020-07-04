class Car {
    constructor(y) {
      
      this.body = Bodies.rectangle(75,y,30,10);
      this.width = 30;
      this.height = 10;
      this.x = 75;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height)
    }
  };