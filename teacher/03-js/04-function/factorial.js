function factorial(n) {
  var i=1, r=1;
  while (i<=n) {
    r = r*i;
    console.log('i=', i, 'r=', r)
    i = i+1;
  }
  return r;
}

var f5=factorial(5)
console.log('factorial(5)='+f5)
