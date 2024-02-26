// 判断是否是平衡二叉树

// 每个节点需要满足的条件
// 1. 左子树也是平衡二叉树
// 2. 右子树也是平衡二叉树
// 3. 左子树的高度和右子树的高度差的绝对值小于1

function isBalancedTree(root) {
  const { isBalanced } = process(root);
  return isBalanced;
}

function process(root) {
  if (!root) return { isBalanced: true, height: 0 };

  const leftData = process(root.left);
  const rightData = process(root.right);

  let height = leftData.height + rightData.height + 1;
  let isBalanced = leftData.isBalanced && 
    rightData.isBalanced &&
    Math.abs(leftData.height - rightData.height) < 2

  return {
    isBalanced,
    height
  }
}