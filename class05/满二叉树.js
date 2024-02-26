// 判断是否是满二叉树

function isFull(root) {
  const { nodes, height } = process(root);
  // N === H ^ 2 - 1
  return nodes === (1 << height) - 1;
}

function process(root) {
  if (!root) return { nodes: 0, height: 0 };

  const leftData = process(root.left);
  const rightData = process(root.right);

  let nodes = leftData.nodes + rightData.nodes + 1;
  let height = Math.max(leftData.height, rightData.height) + 1;

  return {
    nodes,
    height,
  };
}
