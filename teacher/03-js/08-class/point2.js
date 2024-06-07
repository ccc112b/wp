class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  length() {
    let [x,y] = [this.x,this.y]
    return Math.sqrt(x*x+y*y)
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

let p = new Point(2,3)
console.log(p)
console.log(p.toString())
console.log(p+'')
console.log('p.length()=', p.length())

