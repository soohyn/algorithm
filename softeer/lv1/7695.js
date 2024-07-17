/**
 * [한양대 HCPC 2023] Tren del Fin del Mundo
 * https://softeer.ai/practice/7695
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let i = 0;
let min = "";

rl.on("line", (input) => {
  if (count === 0) {
    count = +input;
  } else {
    const y = +input.split(" ")[1];

    if (!min || +min.split(" ")[1] > y) {
      min = input;
    }
  }

  if (++i >= count + 1) {
    console.log(min);
    rl.close();
  }
});
