class Box1 {
  constructor(x, y, width, height) {
    var options = {
      restitution : 0.7,
      friction : 0.6,
      isStatic : false,
    }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity=255;
      this.image=loadImage("pinktin.jpg")
      World.add(world, this.body);
    }
    
    display(){
      console.log(this.body.speed);
      if(this.body.speed<8){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visiblity=this.Visiblity-5;
        tint(255,this.Visiblity);
     
        pop();
      }
      
    }
    score(){
      if(this.Visiblity<0 && this.Visiblity>=-50){
        score++;
      }
    }
    
    };