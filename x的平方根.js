let squareRoot = function(x) {
	let left = 0
	let right = x

	let ans = -1

	while(left <= right) {
		let mid = left + Math.round((right - left) / 2)
		let product = mid * mid

		if(product < x) {
			ans = mid
			left = mid + 1
		} else if(product > x) {
			right = mid - 1
		} else {
			return mid
		}
	}

	return ans
}

squareRoot(4)
squareRoot(9)
squareRoot(16)