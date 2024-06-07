import { Point } from './point.js'

export class Point2D extends Point {
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
