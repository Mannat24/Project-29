class Polygon{
    constructor(bodyA){
       
        this.body = Bodies.circle(50,200,50);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    }
    display(){
        var poly = this.body.position;
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        var angle = this.body.angle;
        

        push()
        translate (poly.x , poly.y);
        rotate (angle);
        strokeWeight(3);
        stroke ("blue");
        fill ("yellow");
        imageMode(CENTER);
        image (this.image,0,0,40,40);
        rect(0,0,this.width,this,height);
        pop ()
    }
}
