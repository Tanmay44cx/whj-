class Dustbin {
    constructor(x, y) {
      var options = {
          isStatic:true
      }
      this.width=200;
      this.height=200;
      this.thickness=20;
      this.angle=0;
      this.leftBody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height, options);
      Matter.Body.setAngle(this.leftBody,this.angle);
      
      
      World.add(world, this.leftBody);

      this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.thickness, options);
      //Matter.Body.setAngle(this.bottomBody,this.angle);
      
      
      World.add(world, this.bottomBody);

      this.rightBody = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height, options);
      Matter.Body.setAngle(this.rightBody,this.angle*-1);
      
      
      World.add(world, this.rightBody);
    }
    display(){
      var pos1 =this.leftBody.position;
      var pos2 =this.rightBody.position;
      var pos3 =this.bottomBody.position;

      //var angle = this.body.angle;
      push();
      translate(pos1.x, pos1.y);
       rectMode(CENTER);
       angleMode(RADIANS);
      fill(255);
      rotate(this.angle);
      rect(0, 0, this.thickness, this.height);
      pop();



      push();
      translate(pos3.x, pos3.y);
       rectMode(CENTER);
       angleMode(RADIANS);
      fill(255);
      rect(0, 0, this.width, this.thickness);
      pop();



      push();
      translate(pos2.x, pos2.y);
       rectMode(CENTER);
       angleMode(RADIANS);
      fill(255);
      rotate(-1*this.angle);
      rect(0, 0, this.thickness, this.height);
      pop();
    }
  }
  