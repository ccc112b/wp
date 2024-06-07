let str = 'name: ccc, Tel: 082-333333, Email:ccckmit@gmail.com, url:https://misavo.com, age:51'
// let regexp = /[a-z]+/g
// let regexp = /[0-9]+/g
// let regexp = /[a-z]+:/g
// let regexp = /[A-Za-z]+:/g
let regexp = /\w+:/g
var m
while ((m = regexp.exec(str))) {
  console.log(`Found ${m[0]}. Next starts at ${regexp.lastIndex}.`);
}

