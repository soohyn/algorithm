/**
 * 주행거리 비교하기
 * https://softeer.ai/practice/6253
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const list = input.split(" ");
  const a = +list[0];
  const b = +list[1];

  if (a - b > 0) {
    console.log('A');
  } else if (a - b < 0) {
    console.log('B');
  } else {
    console.log("same");
  }
});
