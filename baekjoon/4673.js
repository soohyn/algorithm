/**
 * 셀프 넘버
 * https://www.acmicpc.net/problem/4673
 */

// input 없음

const ban = [];
const result = [];
const count = 10000;

for (let i = 1; i < count + 1; i++) {
  if (!ban.includes(i)) result.push(i);
  let sum = i
  i.toString().split("").forEach((item)=>sum+=+item);
  ban.push(sum);
}

console.log(result.join("\n"));
