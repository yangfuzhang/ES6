// 递归
const preorderTraverse = function(root, callback) {
	if(root) {
		callback(root)
		preorderTraverse(root.left)
		preorderTraverse(root.right)
	}
}

// 非递归
const preorderTraverse = function(root, callback) {
	const stack = []

	if(root) {
		stack.push(root)
	}

	while(stack.length > 0) {
        const node = stack.pop()

        callback(node)

        if(node.right !== null) {
        	stack.push(node.right)
        }

        if(node.left !== null) {
        	stack.push(node.left)
        }
	}
}