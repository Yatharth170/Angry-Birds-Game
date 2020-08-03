class Baseclass{
    constructor(x,y,width,height,angle){
         var property={
             restitution:0.8,
             friction:1.0,
             density:1.0
         }
         this.body=Bodies.rectangle(x,y,width,height,property);
          this.width=width;
         this.height=height;
         World.add(world,this.body);
         this.image=loadImage("base.png");
    }      

    display(){
         var angle=this.body.angle;
         push();
         translate(this.body.position.x,this.body.position.y);
         rotate(angle);
         imageMode(CENTER);
         image(this.image,0,0,this.width,this.height);
         pop();

    }

}