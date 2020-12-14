class Ball{
    constructor(x,y,r){
        var options={
            isStatic:false,
            frictionAir:0.005,
            density:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        strokeWeight(3);
        stroke("black");
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}