class Sling {
    constructor (body1,pointB,offsetX,offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY;
        var options ={
          
           bodyA: body1, 
           pointB: this.pointB,
          pointB:{x:this.offsetX,y:this.offsetY}
         }
        this.sling = Constraint.create(options);
      
        World.add(world, this.sling);
    }
    display() {

    var pointA = this.sling.bodyA.position;
    var pointB = this.sling.pointB.position;
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  
}

}

