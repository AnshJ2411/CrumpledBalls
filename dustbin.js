class dustbin{
    constructor(x,y,width,height){
        var o={isStatic:true}
        this.r1=Bodies.rectangle(x,y,width,height,o)
		this.w=width
		this.h=height
        World.add(world,this.r1)
    }
    display(){
        rectMode(CENTER)
        rect(this.r1.position.x,this.r1.position.y,this.w,this.h)
    }
}