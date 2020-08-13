class Ball {
    constructor(x,y,r) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':1.2,
          isStatic:false
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(this.x,this.y,this.r,options);
           
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("red");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  