// 递归实现

function maxDepth(root) {
    if(!root) {
        return 0
    }

    return 1 + Math.max(maxDepth(root.left) + maxDepth(root.right))
}