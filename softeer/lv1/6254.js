/**
 * 근무시간
 * https://softeer.ai/practice/6254
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const list = [];

rl.on("line", (input) => {
  list.push(input);

  if (list.length >= 5) {
    rl.close();
    getSumMin()
  }
});

const getSumMin = () => {
  let sum = 0;


  for (item of list) {
    const time = item.split(" ");
    const start = time[0].split(":");
    const end = time[1].split(":");

    const hour = (+end[0] - +start[0]) * 60;
    const min = +end[1] - +start[1];

    sum += hour + min;
  }

  console.log(sum);
};
