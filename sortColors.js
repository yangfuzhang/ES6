/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列
 * 整数 0、 1 和 2 分别表示红色、白色和蓝色
 * 示例：
 * 输入: [2,0,2,1,1,0]
 * 输出: [0,0,1,1,2,2]
 */

// 思路：统计每个颜色的数量，然后把这个数组重新填充
function sortColors(nums) {
    let colors = [0, 0, 0]

    for(let i = 0; i < nums.length; i++) {
        colors[nums[i]]++
    }

    nums = []

    for(let i = 0; i < colors.length; i++) {
    	for(let j = 0; j < colors[i]; j++) {
    		nums.push(i)
    	}
    }

    return nums
}