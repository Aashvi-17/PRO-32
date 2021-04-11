class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length:0.05
        }
        this.slingshot = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.slingshot);
    }

    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
       
    }
    fly(){
       this.slingshot.bodyA=null; 
    }
    attach(sbody){
        this.slingshot.bodyA=sbody;
    }
}