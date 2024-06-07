import { Point2D } from './mod.js'

let p = new Point2D(2,3), p2 = new Point2D(1,2)
console.log(p)
console.log(p.toString())
console.log(p+'')
console.log('p.length()=', p.length())
console.log('p.sub(p2)=', p.sub(p2))
console.log('p.dot(p2)=', p.dot(p2))
console.log('p.sub(p2).length()=', p.sub(p2).length())
console.log('p.distance(p2)=', p.distance(p2))
