// 三数之和为0
const threeSum = function(nums) {
	if(!nums || nums.length < 3) {
		return []
	}

	let result = [], second, last
	nums.sort((a, b) => a - b)

	for(let i = 0; i < nums.length; i++) {
		if(nums[i] > 0) break

		if(i > 0 && nums[i] === nums[i - 1]) {
			continue
		}

		second = i + 1
		last = nums.length - 1

		while(second < last) {
			const sum = nums[i] + nums[second] + nums[last]

			if(!sum) {
				result.push(nums[i], nums[second], nums[last])

				while(second < last && nums[second] === nums[second + 1]) {
					second++
				}

				while(second < last && nums[last] === nums[last - 1]) {
					last--
				}

				second++
				last--
			} else if(sum < 0) {
				second++
			} else if(sum > 0) {
				last--
			}
		}
	}

	return result
}