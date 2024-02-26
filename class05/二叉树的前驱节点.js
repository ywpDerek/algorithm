// 二叉树的前驱节点

function getSuccessNode(node) {
  if (!node) return null;

  if (node.left) {
    return getMostRight(node.left);
  } else {
    let parent = node.parent;
    while (parent && parent.right != node) {
      node = parent;
      parent = node.parent;
    }
    return parent;
  }
}

function getMostRight(node) {
  if (!node) return null;

  while (node.right) {
    node = node.right;
  }

  return node;
}
