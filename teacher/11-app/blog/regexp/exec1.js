let myRe = /ab*/g;
let str = 'abbcdefabh';
let myArray;
while ((myArray = myRe.exec(str)) !== null) {
  let msg = 'Found ' + myArray[0] + '. ';
  msg += 'Next match starts at ' + myRe.lastIndex;
  console.log(msg);
}