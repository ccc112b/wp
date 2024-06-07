class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  length() {
    let [x,y] = [this.x,this.y]
    return Math.sqrt(x*x+y*y)
  }

  neg() {
    return new Point(-this.x, -this.y)
  }

  add(p2) {
    return new Point(this.x+p2.x,this.y+p2.y)
  }

  sub(p2) {
    return this.add(p2.neg())
  }

  distance(p2) {
    return this.sub(p2).length()
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

let p = new Point(2,3), p2 = new Point(1,2)
console.log(p)
console.log(p.toString())
console.log(p+'')
console.log('p.length()=', p.length())
console.log('p.sub(p2)=', p.sub(p2))
console.log('p.sub(p2).length()=', p.sub(p2).length())
