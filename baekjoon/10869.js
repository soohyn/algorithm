let fs = require("fs");
let input = fs.readFileSync("./dev/stdin.txt").toString().split(" ");

let a = +input[0];
let b = +input[1];
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b, 10));
console.log(a % b);
