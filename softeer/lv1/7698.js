/**
 * [한양대 HCPC 2023] 개표
 * https://softeer.ai/practice/7698
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;

rl.on("line", (input) => {
  if (count === 0) {
    count = input;
  } else {
    getGraphic(+input);
  }
});

const getGraphic = (num) => {
  const value = Math.floor(num / 5);
  const margin = num % 5;
  let string = [];
  if (value > 0) {
    for (let index of new Array(value)) {
      string.push("++++");
    }
  }

  if (margin > 0) {
    let mlist = [];
    for (let index of new Array(margin)) {
      mlist.push("|");
    }
    const join = mlist.join("");
    string.push(join);
  }

  console.log(string.join(" "));
};
