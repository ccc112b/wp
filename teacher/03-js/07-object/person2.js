var a = [1,2,3]

var p2 = {
  name: 'snoopy',
  age: 100,
}

var p1 = {
  name: 'ccc',
  age: 49,
  friends: ['snoopy', 'garfield'],
  wife: p2,
}

console.log('p1=', p1)
console.log('p2=', p2)

var cccWife = p1.wife
console.log('cccWife=', cccWife)
console.log('p1.age=', p1.age)
console.log('p1.wife.name=', p1.wife.name)

