/**
 * 제로
 * https://www.acmicpc.net/problem/10773
 */

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin.txt").toString().split("\n");
const num = +input.shift();

let sum = 0;
let stack = [];

for (let i = 0; i < num; i++) {
  const number = +input[i]

  if (number === 0) {
    sum -= stack.pop();
  } else {
    stack.push(number);
    sum += number;
  }
}

console.log(sum);


/**
 * input.shift() 시간 초과 생김
 */