class Point {
  length() { throw Error('Point.length() not implemented yet!'); }

  sub(p2) {
    return this.add(p2.neg())
  }

  distance(p2) {
    return this.sub(p2).length()
  }
}

class Point2D extends Point {
  constructor(x, y) {
    super()
    this.x = x;
    this.y = y;
  }

  length() {
    let [x, y] = [this.x, this.y]
    return Math.sqrt(x * x + y * y)
  }

  neg() {
    return new Point2D(-this.x, -this.y)
  }

  add(p2) {
    return new Point2D(this.x + p2.x, this.y + p2.y)
  }

  dot(p2) {
    return this.x * p2.x + this.y * p2.y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

class Vector extends Point {

  constructor(array) {
    this.a = array
  }

  neg() {
  }

  add(p2) {
  }

  dot(p2) {
  }

  toString() {
    return JSON.stringify(this.a)
  }
}

let p = new Point2D(2,3), p2 = new Point2D(1,2)
console.log(p)
console.log(p.toString())
console.log(p+'')
console.log('p.length()=', p.length())
console.log('p.sub(p2)=', p.sub(p2))
console.log('p.dot(p2)=', p.dot(p2))
console.log('p.sub(p2).length()=', p.sub(p2).length())
console.log('p.distance(p2)=', p.distance(p2))
/*
p = new Vector([2,3]), p2 = new Vector([1,2])
console.log(p)
console.log(p.toString())
console.log(p+'')
console.log('p.length()=', p.length())
console.log('p.sub(p2)=', p.sub(p2))
console.log('p.dot(p2)=', p.dot(p2))
console.log('p.sub(p2).length()=', p.sub(p2).length())
console.log('p.distance(p2)=', p.distance(p2))
*/