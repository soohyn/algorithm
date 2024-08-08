/**
 * DFS와 BFS
 * https://www.acmicpc.net/problem/1260
 */

let fs = require("fs");
let line = fs.readFileSync("./dev/stdin.txt").toString().split("\n");

const info = line.splice(0, 1)[0].split(" ");

let nodeCount = info[0];
let linkCount = info[1];
let start = info[2];

const bfs = () => {
  const visited = new Array(nodeCount).fill(false);
  const graph = {};

  line.forEach((item) => {
    const link = item.split(" ");
    const key = link[0].toString();
    const node = link[1].toString();
    const value = graph[key] ?? new Array(+nodeCount + 1).fill(false);
    console.log(item, value);
    value[link[1]] = true;

    graph[key] = value;
  });

  console.log(graph);
};

bfs();

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front++];
    return value;
  }

  size() {
    return this.rear - front;
  }
}

const queue = new Queue();
