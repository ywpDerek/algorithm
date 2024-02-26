// 给定一个 二叉树 寻找最大宽度
// 就是 二叉树中 各个层中个数最多的数量是多少

const bt = require("./bt");

function maxWidth(root) {
  if (!root) return;

  const queue = [];
  queue.push(root);
  const map = new Map();
  map.set(root, 1);

  let clevel = 1;
  let cNodes = 0;
  let max = 0;

  while (queue.length) {
    const cur = queue.shift();
    let level = map.get(cur);

    if (level === clevel) {
      cNodes++;
    } else {
      if (cNodes > max) {
        max = cNodes;
      }
      clevel++;
      cNodes = 1;
    }

    if (cur.left) {
      queue.push(cur.left);
      map.set(cur.left, level + 1);
    }

    if (cur.right) {
      queue.push(cur.right);
      map.set(cur.right, level + 1);
    }
  }

  // 可能存在宽度最大的是在最后一层，所以需要再次比较一次
  return Math.max(max, cNodes);
}

console.log(maxWidth(bt));
