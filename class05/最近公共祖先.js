const bt = require('./bt');

function Info(hasNode1, hasNode2, commonNode) {
  this.hasNode1 = hasNode1;
  this.hasNode2 = hasNode2;
  this.commonNode = commonNode;
}
var lowestCommonAncestor = function (root, p, q) {
  const { commonNode } = process(root, p, q);
  return commonNode;
};

function process(root, o1, o2) {
  if (!root) return new Info(false, false, null);

  const leftData = process(root.left, o1, o2);
  const rightData = process(root.right, o1, o2);

  if (leftData.commonNode) {
    return new Info(true, true, leftData.commonNode);
  }
  if (rightData.commonNode) {
    return new Info(true, true, rightData.commonNode);
  }

  if (leftData.hasNode1 && rightData.hasNode2) {
    return new Info(true, true, root);
  }
  if (leftData.hasNode2 && rightData.hasNode1) {
    return new Info(true, true, root);
  }

  let hasNode1 = root.val === o1;
  let hasNode2 = root.val === o2;

  if (leftData.hasNode1 || rightData.hasNode1) {
    if (hasNode2) {
      return new Info(true, true, root);
    } else {
      return new Info(true, false, null);
    }
  }
  if (leftData.hasNode2 || rightData.hasNode2) {
    if (hasNode1) {
      return new Info(true, true, root);
    } else {
      return new Info(false, true, null);
    }
  }

  return new Info(hasNode1, hasNode2, null);
}

console.log(lowestCommonAncestor(bt, 3, 7));

