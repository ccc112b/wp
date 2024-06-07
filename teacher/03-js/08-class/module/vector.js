import { Point } from './point.js'

export class Vector extends Point {

  constructor(array) {
    if (!(array instanceof Array)) throw Error('Vector constorctor accept only array parameter!')
    super()
    this.a = array
  }

  neg() {
    let a = []
    let i=0
    while (i<this.a.length) {
      a[i] = this.a[i]*-1
      i++;
    }
    return new Vector(a)
  }

  add(p2) {
    if (this.a.length != p2.a.length) throw Error('Vector:add() length different!')
    let a = []
    for (let i=0; i<this.a.length; i++) {
      a[i] = this.a[i]+p2.a[i]
    }
    return new Vector(a)
  }

  dot(p2) {
  }

  length() {
    let r = 0
    for (let v of this.a) {
      r += v*v
    }
    return Math.sqrt(r)
  }
  
  toString() {
    return JSON.stringify(this.a)
  }
}
