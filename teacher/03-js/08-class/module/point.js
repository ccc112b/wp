export class Point {
  length() { throw Error('Point.length() not implemented yet!'); }

  sub(p2) {
    return this.add(p2.neg())
  }

  distance(p2) {
    return this.sub(p2).length()
  }
}
