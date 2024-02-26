// 拓扑排序算法
// 只存在于有向图并且无环的情况下，切有入度为0的节点

function sortedTopology(graph) {
  const inMap = new Map();
  const queue = [];
  const result = [];

  for (let node of graph.nodes) {
    inMap.set(node, node.in);
    if (!node.in) {
      queue.unshift(node);
    }
  }

  while (!queue.length) {
    const cur = queue.pop();
    result.push(cur);

    for (let next of cur.nexts) {
      inMap.set(next, inMap.get(next) - 1);

      if (!inMap.get(next)) {
        queue.unshift(next);
      }
    }
  }
  
  return result;
}