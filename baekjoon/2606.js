/**
 * 바이러스
 * https://www.acmicpc.net/problem/2606
 */

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin.txt").toString().split("\n");

const nodeCount = +input.shift();
const linkCount = +input.shift();

let graph = new Array(nodeCount + 1);
let visited = new Array(nodeCount + 1).fill(false);

for (let i = 0; i < linkCount; i++) {
  const info = input[i].split(" ");
  const x = +info[0];
  const y = +info[1];

  if (!graph[y]) {
    graph[y] = new Array(nodeCount + 1).fill(false);
  }
  if (!graph[x]) {
    graph[x] = new Array(nodeCount + 1).fill(false);
  }

  graph[x][y] = true;
  graph[y][x] = true;
}

let result = 0;

const dfs = (n) => {
  visited[n] = true;

  if (!graph[n]) return;

  for (let i = 1; i < nodeCount + 1; i++) {
    if (graph[n][i] && !visited[i]) {
      result++;
      dfs(i);
    }
  }
};

dfs(1);

console.log(result);

class Queue {
  constructor() {
    this.list = [];
    this.front = 0;
    this.rear = 0;
  }

  push(n) {
    this.list[this.rear] = n;
    this.rear++;
  }

  pop() {
    const value = this.list[this.front];
    delete this.list[this.front++];
    return value;
  }

  size() {
    return this.rear - this.front;
  }
}

const bfs = () => {
  const queue = new Queue();

  queue.push(1);
  visited[1] = 1;

  for (let i = 1; i < nodeCount + 1; i++) {
    if (queue.size() === 0) return;

    const current = queue.pop();

    for (let j = 1; j < nodeCount + 1; j++) {
      if (graph[current] && graph[current][j] && !visited[j]) {
        queue.push(j);
        result++;
        visited[j] = true;
      }
    }
  }
};
