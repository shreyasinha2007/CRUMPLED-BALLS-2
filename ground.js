class Ground {
    constructor(x,y,width,height){
   var options= {
        isStatic:true
}
 
this.bodyy = Matter.Bodies.rectangle(x,y,900,10,options)
this.width=900;
this.height=10;
Matter.World.add(world,this.bodyy)
}
display(){
    var pos =this.bodyy.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
}
}
