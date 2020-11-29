// 迭代实现

const inorderTraverse = function(root, callback) {
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