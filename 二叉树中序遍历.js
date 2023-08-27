// 递归实现
const inorderTraverse = function(root, callback) {
	if(root) {
		inorderTraverse(root.left)
		callback(root)
		inorderTraverse(root.right)
	}
}


// 迭代实现
const inorderTraverseAlt = function(root, callback) {
	const stack = []
    const node = root

    while(root || stack.length) {
    	while(node) {
    		stack.push(node)
    		node = node.left
    	}

    	node = stack.pop()
    	callback(node)
    	node = node.right
    }  
}