let myRe = /:([a-zA-Z0-9]+)/g;
let str = "name:ccc age:52 weight:60"
let m;
while ((m = myRe.exec(str)) !== null) {
  console.log(m[1]);
}
