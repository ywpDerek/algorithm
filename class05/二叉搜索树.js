// 判断是否是一个二叉搜索树

// 满足二叉搜索树的特点
// 1. 当前节点的 val 大于 左子树的最大值
// 2. 当前节点的 val 小于 右子树的最小值
// 3. 左右两个子树都必须是二叉搜索树

// 还有一种解法是 对二叉树进行中序遍历 输出的数组如果是逐渐递增的
// 那么就说明是二叉搜索树

// 2 1 3
const tree = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}

var isValidBST = function (root) {
  const data = process(root);
  return data.isBST;
};

function process(root) {
  if (!root) return null;

  const leftData = process(root.left);
  const rightData = process(root.right);

  let max = root.val;
  let min = root.val;

  if (leftData) {
    min = Math.min(min, leftData.min);
    max = Math.max(max, leftData.max);
  }
  if (rightData) {
    min = Math.min(min, rightData.min);
    max = Math.max(max, rightData.max);
  }

  let isBST = false;
  if (
    (leftData ? leftData.isBST && leftData.max < root.val : true) &&
    (rightData ? rightData.isBST && rightData.min > root.val : true)
  ) {
    isBST = true;
  }

  return {
    isBST,
    min,
    max,
  };
}
console.log(isValidBST(tree));
