  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;

function preload(){
  img=loadImage("polygon.png")
  gettime();
}

function setup() {
var canvas = createCanvas(1700,700);
    engine = Engine.create();
    world = engine.world;
     
    score = 0;
   
    ground2 = new Ground(390,300,240,20);
    ground3 = new Ground(590,510,30,1);
    ground4 = new Ground(590,470,90,1);
    ground5 = new Ground(588,435,150,1);
    //Blocks
    Block1= new Box1(330,270,30,40);
    Block2= new Box2(360,270,30,40);
    Block3= new Box2(390,270,30,40);
    Block4= new Box2(420,270,30,40);
    Block5= new Box1(450,270,30,40);

            Block6= new Box2(330,235,30,40);
    Block7= new Box1(360,235,30,40);
    Block8= new Box2(390,235,30,40);
    Block9= new Box1(420,235,30,40);
                Block10= new Box2(450,235,30,40);

              Block11= new Box2(360,195,30,40);
    Block12= new Box1(390,195,30,40);
              Block13= new Box2(420,195,30,40);

    Block14= new Box3(390,155,30,40);

                Block15= new Box2(300,270,30,40);
                Block16= new Box2(480,270,30,40);

    block1= new Box1(532,433,30,40);
                block2= new Box2(560,430,30,40);
                block3= new Box2(590,430,30,40);
                block4= new Box2(620,430,30,40);
                block5= new Box2(648,433,30,40);

    block6= new Box2(560,465,30,40);
    block7= new Box2(590,455,30,40);
    block8= new Box2(620,455,30,40);

    block9= new Box3(590,480,30,40);

    polygon=Bodies.circle(250,200,20);
    
    World.add(world,polygon);

    slingshot= new SlingShot(this.polygon,{x:150,y:200})
    player = new Player(250,200,30,30)
}
function draw(){
  if(backgroundImg){
    background(backgroundImg);
   }
  text("Score: "+score,750,40);
     rectMode(CENTER);
     ellipseMode(CENTER);
      
     
      
      textSize(30);
  fill('maroon');
  textFont("Broadway");
     text("YOU HAVE 2 CHANCES TO PLAY !!!", 40,40)
    
    Engine.update(engine);
    fill("brown")
    ground2.display();
    
    ground4.display();
    ground5.display();
    
    fill("purple")
   
    Block16.display();
    Block6.display();
    Block11.display();
    Block13.display();
    Block15.display();
    Block10.display();

    block4.display();
    block2.display();
    block3.display();
   
    fill("pink")
    block1.display();
    block5.display();
    Block1.display();
    Block12.display();
    Block7.display();
    Block9.display();
   
    Block5.display();
    fill("cyan")
    Block8.display();
    Block2.display();
    Block3.display();
    Block4.display();
   block6.display();
   block7.display();
   block8.display();
    fill("yellow")
    
    Block14.display();
   block9.display();
   
    imageMode(CENTER);
    image(img,polygon.position.x,polygon.position.y,40,40)
   
    slingshot.display();
    fill("orange")
    
    Block16.score();
    Block6.score();
    Block11.score();
    Block13.score();
    Block15.score();
    Block10.score();

    block4.score();
    block2.score();
    block3.score();
   
    block1.score();
    block5.score();
    Block1.score();
    Block12.score();
    Block7.score();
    Block9.score();
   
    Block5.score();

    Block8.score();
    Block2.score();
    Block3.score();
    Block4.score();
   block6.score();
   block7.score();
   block8.score();

   Block14.score();
   block9.score();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}function keyPressed(){
	if (keyCode === 32){
    slingshot.attach(polygon);
		Body.setPosition(polygon,{x:250,y:200});
	
		
	}}

  async function gettime(){
    var response  = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    datetime=responseJSON.datetime;
    hour=datetime.slice(11,13);

    if(hour>=06 && hour<=18){
     bg= "bg.png"
    }
    else{
    bg="bg2.png"
    }
    backgroundImg=loadImage(bg);
  
}
