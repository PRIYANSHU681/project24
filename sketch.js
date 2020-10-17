
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
		ball= new paperclass(20,600,20);
		ground = new Ground(width/2, 650, width, 10 )

		redBox1= new dustbin (width/2+300,635,205,20,{isStatic:true})
		World.add(world,redBox1);
	
		redBox2= new dustbin(width/2+205,595,20,100,{isStatic:true})
		World.add(world,redBox2);
	
		redBox3= new dustbin(width/2+410,595,20,100,{isStatic:true})
		World.add(world,redBox3);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ball.display();
 ground.display();
 redBox1.display()
 redBox2.display()
 redBox3.display()
 
}

	function keyPressed() {
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
	}