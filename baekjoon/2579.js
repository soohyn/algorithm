/**
 * 계단 오르기
 * https://www.acmicpc.net/problem/2579
 */

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin.txt").toString().split("\n");

const count = +input[0];

const arr = new Array(count + 1);

for (let i = 0; i < count + 1; i++) {
  if (i === 0) arr[i] = 0;
  else if (i === 1) arr[i] = +input[1];
  else if (i === 2) arr[i] = +input[2] + +input[1];
  else {
    const score = +input[i];

    arr[i] = Math.max(arr[i - 3] + +input[i - 1] + score, arr[i - 2] + score);
  }
}

console.log(arr[count]);
