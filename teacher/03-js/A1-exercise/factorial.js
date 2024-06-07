function factorial(n) {
  var r = 1
  for (var i=1; i<=n; i++) {
    r = r * i;
  }
  return r;
}

// console.log('factorial(5)=', factorial(5))
var n = parseInt(Deno.args[0])
console.log('factorial(', n, ')=', factorial(n))
