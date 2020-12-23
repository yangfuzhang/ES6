// n * n 二维数组，螺旋递增，从1递增至n的平方
/* 例：[
        [ 1, 2, 3 ],
        [ 8, 9, 4 ],
        [ 7, 6, 5 ]
       ]
*/
const spiralMatrix = function(n) {
	const result = []

	for(let i = 0; i < n; i++) {
		result.push(new Array(n))
	}

	let left = 0
	let right = n - 1
	let top = 0
	let bottom = n - 1
	let current = 1, max = n * n

	while(current <= max) {
		// 左-右
		for(let i = left; i <= right; i++) {
			result[top][i] = current++
		}

		top++
        
        // 上-下
		for(let i = top; i <= bottom; i++) {
			result[i][right] = current++
		}

		right--

		// 右-左
		for(let i = right; i >= left; i--) {
			result[bottom][i] = current++
		}

		bottom--

		// 下-上
		for(let i = bottom; i >= top; i--) {
			result[i][left] = current++
		}

		left++
	}

	return result
}