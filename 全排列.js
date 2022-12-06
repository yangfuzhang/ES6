/**
 * 给定一个【没有重复】数字的序列，返回其所有可能的全排列
 * From: https://github.com/sl1673495/leetcode-javascript/issues/68
 */

let permute = function(nums) {
	let n = nums.length
	if(n === 1) {
		return [nums]
	}

	let res = []

	for(let i = 0; i < n; i++) {
		let used = nums[i]
        let rest = nums.slice(0, i).concat(nums.slice(i + 1, n))
        let restPermuteds = permute(rest)

        for(let restPermuted of restPermuteds) {
        	res.push(restPermuted.concat(used))
        }
	}

	return res
}