/**
 * 연탄 배달의 시작
 * https://softeer.ai/practice/7626
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let vNum = 0;

rl.on("line", (input) => {
  if (vNum === 0) {
    vNum = +input;
  } else {
    let count = 0;
    let min = 0;
    const villages = input.split(" ");

    for (let index in new Array(vNum - 1).fill(0)) {
      const d = +villages[+index + 1] - +villages[+index];

      if (min === 0 || d < min) {
        min = d;
        count = 1;
      } else if (min === d) {
        count += 1;
      } else {
        continue;
      }
    }

    console.log(count);
  }
});
