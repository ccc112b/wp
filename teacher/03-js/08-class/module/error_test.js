import { Vector } from './mod.js'
try {
  let p = new Vector([1,2,3]), p2 = new Vector([2,2])
  let r = p.add(p2)
  console.log(r)
} catch (error) {
  console.log('error:', error)
  console.log('finished!')
}

