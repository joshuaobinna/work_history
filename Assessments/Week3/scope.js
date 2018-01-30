/**
  In this assessment, you will be testing your knowledge of functions scopes.
*/

// What will the below functions console log?
function run1() {
  let a = 10;
  if(a > 5) {
  a = 7;
}
  console.log(a)
}
run1()
//answer = 7

function run2() {
if(true) {
const a = 5;
}console.log(a);
}
run2()
//  a is not defined

function run3() {
const a = 2;
a = 3;
console.log(a);
}
run3()
// a is already assigned 2

// What will the below functions console log? And in what order?
// ex: First => 10, Second => 4

const a = 6;
function run4() {
const a = 7
console.log(a);
}
run4();
console.log(a);​
// first Answer = 7, second answer is 6

const a = 6;
function run5() {
const a = 7;
function run6() {
const a = 8;
console.log(a);  // 8
}
   run6();
    console.log(a);  // 7
}
run5();
console.log(a);​  // 6

// Answer; first => 8, second => 7, third => 6
