// 输入的二维数组只会进行单向判断

// 5 6
// 1 2 
// 2 3 
// 3 4 
// 4 1 
// 2 4 
// 4 5

class Node {
  constructor(value) {
    this.value = value;
    this.in = 0;
    this.out = 0;
    this.nexts = [];
    this.edges = [];
  }
}


class Edge {
  constructor(from, to, weight) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.nodes = new Map();
    this.edges = new Set();
  }
  isLinked(i, j) {
    for (let item of this.edges) {
      if (item.from.value === i && item.to.value === j) {
        return true;
      };
    }
    return false;
  }
}

function createGraph(arr, m) {
  const graph = new Graph();

  for (let i = 0; i < m; i++) {
    const from = arr[i][0];
    const to = arr[i][1];

    if (!graph.nodes.has(from)) {
      graph.nodes.set(from, new Node(from));
    }
    if (!graph.nodes.has(to)) {
      graph.nodes.set(to, new Node(to));
    }

    const fromNode = graph.nodes.get(from);
    const toNode = graph.nodes.get(to);
    const newEdge = new Edge(fromNode, toNode, 0);

    fromNode.nexts.push(toNode);
    fromNode.out++;
    toNode.in++;
    fromNode.edges.push(newEdge);
    graph.edges.add(newEdge);
  }

  return graph;
}


const arr = [
  [5, 6],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 1],
  [2, 4],
  [4, 5]
]

function draw(n, m, arr) {
  const graph = createGraph(arr, m);

  for (let i = 1; i <= n; i++) {
    let s = '';

    for (let j = 1; j <= n; j++) {
      if (graph.isLinked(i, j)) {
        s = s + '1 ';
      } else {
        s = s + '0 ';
      }
    }
    console.log(s);
  }
}

draw(5, 7, arr);
