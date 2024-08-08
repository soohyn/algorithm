/**
 * 피보나치 수
 * https://www.acmicpc.net/problem/2747
 */

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin.txt").toString();
const arr = new Array(input);

/** 배열 */
for (let n = 0; n < +input; n++) {
  if (n < 2) arr[n] = 1;
  else {
    arr[n] = arr[n - 1] + arr[n - 2];
  }
}
//console.log(arr[+input - 1]);

/** 재귀 함수 */
const fibo = (n) => {
  if (n < 3) return 1;
  else return fibo(n - 1) + fibo(n - 2);
};

const value = fibo(+input);

console.log(value)
