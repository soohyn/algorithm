const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  console.log(`received: ${input}`);
});

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a * b);

//한 줄 입력

let fs = require("fs");
let input1 = fs.readFileSync("/dev/stdin").toString().split(" ");

let num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log(i);
}

//여러 줄 입력

let fs = require("fs");
let input2 = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

for (let i = 0; i < numbers.length; i++) {
  let num1 = Number(numbers[i][0]);
  let num2 = Number(numbers[i][1]);

  console.log(num1 + num2);
}
