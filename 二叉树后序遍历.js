// 递归实现
const postOrderTraverse = function(root, callback) {
	if(root) {
		postOrderTraverse(root.left)
		postOrderTraverse(root.right)
        callback(root)
	}
}


// 非递归实现
const postOrderTraverseAlt = function(root) {
    const list = []
    const stack = []

    if(root) {
        stack.push(root)
    }

    while(stack.length > 0) {
        const node = stack.pop()

        list.unshift(node)

        if(node.left !== null) {
            stack.push(node.left)
        }

        if(node.right !== null) {
            stack.push(node.right)
        }
    }

    return list
}