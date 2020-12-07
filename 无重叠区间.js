/**
 * @param {number[][]} intervals
 * @return {number}
 * From: https://github.com/sl1673495/leetcode-javascript/issues/90
 */

 let eraseOverlapIntervals = function (intervals) {
 	let n = intervals.length

 	if(!n) {
 		return 0
 	}

 	intervals.sort((a, b) => a[0] - b[0])

 	let dp = []
 	dp[0] = 1

 	for (let i = 1; i < n; i++) {
 		let max = 1
 		let [curStart] = intervals[i]

 		for (let j = 0; j < i; j++) {
 			let [prevStart, prevEnd] = intervals[j]
 			if (prevEnd <= curStart) {
 				max = Math.max(max, dp[j] + 1)
 			}
 		}

 		dp[i] = max
 	}

 	return n - Math.max(...dp)
 }