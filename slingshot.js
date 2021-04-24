class slingshot{

    constructor(bodyA,bodyB){

        var options = {

            length:10,
            stiffness:0.04,
            bodyA:bodyA,
            bodyB:bodyB
        } 
    
        this.sling = constraint.create(options)
        World.add(world,this.sling)
    

    }

display(){
    var pointA=this.sling.bodyA.position;
    var pointB =this.sling.bodyB.position;
   line (pointA.x, pointA.y, pointB.x,pointB.y);
   strokeWeight(5);

}
}

