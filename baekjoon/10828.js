/**
 * 스택
 * https://www.acmicpc.net/problem/10828
 */

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin.txt").toString().split("\n");
const num = +input.shift();

const stack = [];
const result = [];

for (let i = 0; i < num; i++) {
  const item = input[i].split(" ");
  const func = item[0];

  if (func === "push") {
    const i = item[1];
    stack.push(i);
  } else if (func === "top") {
    result.push(stack.length ? stack[stack.length - 1] : -1);
  } else if (func === "size") {
    result.push(stack.length);
  } else if (func === "empty") {
    result.push(stack.length ? 0 : 1);
  } else if (func === "pop") {
    if (stack.length) {
      result.push(stack[stack.length -1]);
      stack.pop();
    } else {
      result.push(-1);
    }
  } else {
    return "?";
  }
}

console.log(result.join('\n'))


/**
 * 콘솔 많으면 시간초과 남
 */