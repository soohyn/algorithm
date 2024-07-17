/**
 * A+B
 * https://softeer.ai/practice/6295
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let casenum = 0;

rl.on("line", (input) => {
  if (count === 0) {
    count = +input;
  } else {
    const list = input.split(" ");
    console.log("Case #" + ++casenum + ": " + (+list[0] + +list[1]));
  }
});
