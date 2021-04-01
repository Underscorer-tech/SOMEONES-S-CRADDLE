class bob {

  constructor(x, y, r) {

   var options = {

      isStatic:false,
      restitution: 0.2,
      friction: 0.5,
      density: 2,

    }
    this.r = r;
    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body)

  }
  display() {

    var pos = this.body.position;
    push()
    translate(pos.x, pos.y);
    fill("cyan");
    ellipseMode(CENTER)
    ellipse( 0, 0, this.r, this.r)
    pop()

  }

}