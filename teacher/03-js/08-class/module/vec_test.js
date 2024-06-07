import { Vector } from './mod.js'

let p = new Vector([2,3,4]), p2 = new Vector([1,2,3])
console.log('p=', p)
console.log('p2=', p2.toString())
console.log('p.length()=', p.length())
console.log('p.sub(p2)=', p.sub(p2))
console.log('p.sub(p2).length()=', p.sub(p2).length())
console.log('p.distance(p2)=', p.distance(p2))
