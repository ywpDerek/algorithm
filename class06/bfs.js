// 广度优先遍历 或 宽度优先遍历

// node 头节点
function bfs(node) {
  if (node == null) {
    return;
  }

  const queue = [];
  const set = new Set();

  queue.unshift(node);
  set.add(node);

  while (!queue.length) {
    const cur = queue.pop();
    console.log(cur.value);

    for (let item of cur.nexts) {
      if (!set.has(item)) {
        queue.unshift(item);
        set.add(item);
      }
    }
  }
}