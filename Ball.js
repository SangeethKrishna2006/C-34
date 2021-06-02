
  class Ball{
    constructor(x, y, r) {
        var options = {
    
            'frictionAir':0.005,
            'density':1
        }
        this.r= r;
        this.body = Bodies.circle(x, y,r/2,options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("black");
        fill ("lightBlue");
        ellipse( 0, 0, this.r, this.r);
        pop();
      }
}