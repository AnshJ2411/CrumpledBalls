class ball{
    constructor(x,y){
        this.bl=loadImage("paper.png")
        var dens={density:0.5}
        this.b=Bodies.circle(x,y,30,dens)
        World.add(world,this.b)
    }
    display(){
        imageMode(RADIUS)
        image(this.bl,this.b.position.x,this.b.position.y,30,30)
    }
}