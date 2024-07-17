/**
 * 나무 심기
 * https://softeer.ai/practice/7353
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;

rl.on("line", (input) => {
  if (count === 0) {
    count = +input;
  } else {
    const list = input.split(" ");

    let max = 0;

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const value = +list[i] * +list[j];
        if (max === 0 || max < value) {
          max = value;
        }
      }
    }

    console.log(max);
    rl.close();
  }
});
