class Ball {
    constructor(x, y, radius) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':10
      }
      this.body = Matter.Bodies.circle(x, y, 30, options);
      this.radius= 30;
      this.image=loadImage("sprites/paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var radius = this.body.radius;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      imageMode(CENTER);
      image(this.image, 0, 0, 50, 60);
      pop();
    }
}