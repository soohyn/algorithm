/**
 * 수 이어 쓰기 1
 * https://www.acmicpc.net/problem/1748
 */

const fs = require("fs");
let input = fs.readFileSync("./dev/stdin.txt").toString();

let sum = 0;
let len = input.length;

for (let i = 0; i < len; i++) {
  if (len - 1 === i) {
    const count = +input - 10 ** i;
    sum += (count + 1) * (i + 1);
  } else if (i === 0) {
    sum += 9;
  } else {
    sum += (10 ** (i + 1) - 10 ** i) * (i + 1);
  }
}

console.log(sum);
