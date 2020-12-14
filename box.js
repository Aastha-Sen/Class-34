class Box{
    constructor(x,y,w,h){
        var options={
            isStatic:false,
            restitution:1,
            friction:1,
            density:0.04
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        strokeWeight(2);
        stroke("black");
        fill("orange");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}