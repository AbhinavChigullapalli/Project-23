class rope{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA = pointA
		this.pointB = pointB

		var options = {
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA,y:this.pointB}
		}

	//create rope constraint here
	var con = Matter.Constraint.create({ 
		pointA : {x : 360,y : 100},
		bodyB : ball1,ball2,ball3,ball4,ball5,
		pointB : {x : 0,y : 0},
		length : 200,
		stiffness : 0.2
	  })
	  World.add(world,con)
	}


    //create display() here
    display(){

		var pointA = this.rope.bodyA.position
		var pointB = this.rope.bodyB.Position

		strokeWeight(2)
		line(con.pointA.x,con.pointA.y,ball1.position.x,ball1.position.y)
	}
}
