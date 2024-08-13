/**
 * 정수 a를 k로 만들기
 * https://www.acmicpc.net/problem/25418
 */

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin.txt").toString().split(" ");

let from = +input[0];
let to = +input[1];

let count = 0;

while(to > from){
  if (to % 2 === 0 && to/2 >= from) {
    to /= 2;
  } else {
    to -= 1;
  }
  count++
}

console.log(count)
