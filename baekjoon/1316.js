/**
 * 그룹 단어 체커
 * https://www.acmicpc.net/problem/1316
 */

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin.txt").toString().split("\n");
const num = +input.shift();

let count = num;

for (let i = 0; i < num; i++) {
  let checked = {};

  for (let j = 0; j < input[i].length; j++) {
    const char = input[i][j];
    if (j !== 0 && checked[char] && input[i][j - 1] !== char) {
      count--;
      break;
    }

    checked[char] = true;
  }
}

console.log(count);
