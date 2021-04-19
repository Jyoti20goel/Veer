const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function preload()
{
	ballImg = loadImage("download.png");
}

function setup(){
    var canvas = createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(300,590,600,20,ground_options);
    World.add(world,ground);

 
   ball = createSprite(150,100);
	ball.addImage(ballImg);
	ball.scale = 0.2;

	//ballBody = Bodies.circle(200 , 550 , 5 , {restitution:0.5, isStatic:true});
	//World.add(world, ballBody);
    Engine.run(engine);
}

function draw(){
    background(0);
   
    rectMode(CENTER);

    rect(ground.position.x,ground.position.y,600,20);
    ellipseMode(RADIUS);

   // ball.x= ballBody.position.x 
    //.y= ballBody.position.y 
  
   // if(ball.y > 470 && ballBody.position.y > 470 ){
    //    Matter.Body.setStatic(ballBody,true);
  //  }
    drawSprites();
    }

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
           ball.x = ball.x + 20;
	}
	
        if(keyCode === LEFT_ARROW){
           ball.x = ball.x - 20;
	}
if(keyCode==DOWN_ARROW){
    ball.velocityY=ball.velocityY+2
}
	//if (keyCode === UP_ARROW) {
	//	Matter.Body.setStatic(ballBody,false); 
	//}
}