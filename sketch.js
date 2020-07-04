var car1, car2, car3, car4;
var wall1, wall2, wall3, wall4;
var stopper1, stopper2, stopper3, stopper4;
var speed, weight, deformation;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
  createCanvas(1600,500);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  
  
  car1 = new Car(75)
  car2 = new Car(200)
  car3 = new Car(325)
  car4 = new Car(450)

  wall1 = new Wall(75)
  wall2 = new Wall(200)
  wall3 = new Wall(325)
  wall4 = new Wall(450)

  stopper1 = new Stopper(111.5+10)
  stopper2 = new Stopper(236.5+10)
  stopper3 = new Stopper(361.5+10)
  stopper4 = new Stopper(486.5+10)
  
  speed = random(50, 100)
  weight = random(500, 3000)
  deformation = (0.5 * weight * speed * speed) / 22500
}

function draw() {
  rectMode(CENTER)
  background(0); 
  car1.display()
  car2.display()
  car3.display()
  car4.display()
  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()
  stopper1.display()
  stopper2.display()
  stopper3.display()
  stopper4.display()
  /*car1.collide(stopper1)
  wall1.collide(stopper1)
  car2.collide(stopper2)
  wall2.collide(stopper2)
  car3.collide(stopper3)
  wall3.collide(stopper3)
  car4.collide(stopper4)*/
  wall4.collide(stopper4)

  
}

function keyPressed() {
  if(keyCode === UP_ARROW){
    speed = random(50, 100)
    car1.velocityX = speed
  }
}