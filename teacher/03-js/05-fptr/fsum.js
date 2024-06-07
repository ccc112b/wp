function sum(n) {
  var s=0;
  for (var i=1; i<=n; i++) {
    s = s+i;
  }
  return s;
}

var sum10 = sum(10);
console.log("1+...+10="+sum10);