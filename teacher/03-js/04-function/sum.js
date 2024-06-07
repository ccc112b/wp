function sum(n) {
  var i=1, s=0;
  while (i<=n) {
    s = s+i;
    console.log('i=', i, 's=', s)
    i = i+1;
  }
  return s;
}

var s5=sum(5)
console.log('sum(5)='+s5)
