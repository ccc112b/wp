function add(a,b) {
  return a+b
}

var f = function (a,b) {
  return a-b
}
var sub = f

console.log('add(3,5)=', add(3,5))
console.log('sub(5,3)=', sub(5,3))
