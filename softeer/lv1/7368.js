/**
 * 위험한 효도
 * https://softeer.ai/practice/7368
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
  const d = +list[2];

  let go = getGameTime(a, b, d);
  let back = getGameTime(b, a, d);

  console.log(go + back);
});

const getGameTime = (back, front, d) => {
  const value = Math.floor(d / back);
  const margin = d % back;

  let sum = 0;

  if (margin === 0) {
    sum += (back + front) * value - front;
  } else {
    sum += (back + front) * value + margin;
  }

  return sum;
};
