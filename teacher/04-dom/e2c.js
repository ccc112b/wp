var e2c = {cat: "貓", dog: "狗", a: "一隻", the: "這隻", chase:"追", eat:"吃"}

function mt(e) {
  var c = []
  for (var i=0; i < e.length; i++) {
    var eword = e[i] // 取得英文詞彙
    c.push(e2c[eword]) // 用 e2c 查出中文，再推入 c[] 裡面。
  }
  return c
}

var english = 'a dog chase a cat'
console.log('english=', english)
var e = english.split(' ')
console.log('e=', e)
var c = mt(e)
console.log('c=', c)
var chinese = c.join(' ')
console.log('chinese=', chinese)

/* 執行結果

mac020:05-js mac020$ node e2c
e= [ 'a', 'dog', 'chase', 'a', 'cat' ]
c= [ '一隻', '狗', '追', '一隻', '貓' ]
mac020:05-js mac020$ node e2c
english= a dog chase a cat
e= [ 'a', 'dog', 'chase', 'a', 'cat' ]
c= [ '一隻', '狗', '追', '一隻', '貓' ]
chinese= 一隻 狗 追 一隻 貓

*/
