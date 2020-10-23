class Log {
    constructor(x,y,width,height){
   var options= {
        isStatic:true,
   }
 
this.boddy = Matter.Bodies.rectangle(x,y,width,height,options)
this.width=width;
this.height=height;
Matter.World.add(world,this.boddy)
}
display(){
    var pos =this.boddy.position;
    push();
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    fill("red");
    pop();
}
}
