/**
 * 1로 만들기
 * https://www.acmicpc.net/problem/1463
 */

const fs = require("fs");
let input = +fs.readFileSync("./dev/stdin.txt").toString();
let dp = new Array(input + 1);

for (let i = 0; i < input + 1; i++) {
  if (i < 2) dp[i] = 0;
  else if (i < 4) dp[i] = 1;
  else {
    dp[i] = dp[i-1] + 1
    if(i%3 === 0){
      dp[i] = Math.min(dp[i/3] + 1, dp[i])
    }
    if(i%2 === 0){
      dp[i] = Math.min(dp[i/2] + 1, dp[i])
    }
  }
}


console.log(dp[input]);
