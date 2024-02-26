// 二叉树的后继节点

function getSuccessNode(node) {
  if (!node) return null;

  if (node.right) {
    return getMostLeft(node.right);
  } else {
    let parent = node.parent;
    while (parent && parent.left != node) {
      node = parent;
      parent = node.parent;
    }
    return parent;
  }
}

function getMostLeft(node) {
  if (!node) return null;

  while (node.left) {
    node = node.left;
  }

  return node;
}