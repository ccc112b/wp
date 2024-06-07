class Vector {

  constructor(array) {
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
    let a = []
    for (let i=0; i<this.a.length; i++) {
      a[i] = this.a[i]+p2.a[i]
    }
    return new Vector(a)
  }

  length() {
    let r = 0
    for (let v of this.a) {
      r += v*v
    }
    return Math.sqrt(r)
  }

  sub(p2) {
    return this.add(p2.neg())
  }

  distance(p2) {
    return this.sub(p2).length()
  }

  toString() {
    return JSON.stringify(this.a)
  }
}

let p = new Vector([2,3,4]), p2 = new Vector([1,2,3])
console.log(p)
console.log(p.toString())

console.log('p=', p, 'p2=', p2)
console.log('p.neg()=', p.neg())
console.log('p.add(p2)=', p.add(p2))

