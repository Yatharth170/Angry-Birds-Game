class Ground{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.body.isStatic=true;
        this.image=loadImage("images/ground.png")
    }
    display(){
        imageMode(CENTER);
        
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }

}