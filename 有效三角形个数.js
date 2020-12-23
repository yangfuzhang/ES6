let triangleCount = function(nums) {
	if(!nums || nums.length < 3) {
		return 0
	}

	let count = 0

	nums.sort((a, b) => a - b)

	for(let k = nums.length - 1; k > 1; k--) {
		let i = 0, j = k - 1

		while(i < j) {
			if(nums[i] + nums[j] > nums[k]) {
				count += j - i
				j--
			} else {
				i++
			}
		}
	}

	return count
}