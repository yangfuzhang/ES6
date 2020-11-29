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
        const curNode = stack.pop()

        callback(curNode)

        if(curNode.right !== null) {
        	stack.push(curNode.right)
        }

        if(curNode.left !== null) {
        	stack.push(curNode.left)
        }
	}
}