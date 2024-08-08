/**
 * 부녀회장이 될테야
 * https://www.acmicpc.net/problem/2775
 * 구현
 */

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin.txt").toString().split("\n");

const t = +input.shift();

const zero = Array.from(new Array(15), (v, k) => k);

for (let i = 0; i < t; i++) {
  const k = +input.shift();
  const n = +input.shift();

  let house = [];

  for (let f = 0; f <= k; f++) {

    if (f === 0) {
      house[f] = zero;
    } else {
      for (let r = 0; r <= n; r++) {
        if (r === 0) house[f] = [0];
        else {
          house[f][r] = house[f][r - 1] + house[f - 1][r];
        }
      }
    }
  }

  console.log(house[k][n]);
}
