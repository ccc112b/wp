var e2c = { dog: '狗', cat: '貓', a: '一隻', the: '這隻', chase: '追', eat: '吃' }

function mt (e) {
  var c = []
  for (let i in e) {
    var eword = e[i]
    var cword = e2c[eword]
    c.push(cword)
  }
  return c
}

console.log('Deno.args=', Deno.args)
var c = mt(Deno.args)
console.log(c)

/*
$ deno run e2c.js a dog chase a cat
Deno.args= [ "a", "dog", "chase", "a", "cat" ]
[ "一隻", "狗", "追", "一隻", "貓" ]
*/
