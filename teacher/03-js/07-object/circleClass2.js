class Circle {
  constructor(r) {
    this.r = r
  }
  setRadius(r) {
    this.r = r
    return this
  }
  area() {
    return 3.14*this.r*this.r;
  }
}

var c1 = new Circle(1)
console.log("c1.r=", c1.r);
console.log("c1.area()=", c1.area());
var c2 = new Circle(2)
console.log("c2.area()=", c2.area());
console.log("c2.setRadius(3).area()=", c2.setRadius(3).area());
console.log("c2.area()=", c2.area());
console.log("c2.setRadius(6).setRadius(7).area()=", c2.setRadius(6).setRadius(7).area());
