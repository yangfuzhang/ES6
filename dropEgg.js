let dpFunc = function(k, n) {
	let memo = new Array(k)

	for(let i = 0; i < memo.length; i++) {
		memo[i] = new Array(n)
	}

	for(let row = 0; row < memo.length; row++) {
		for(let col = 0; col < memo[row].length; col++) {
			memo[row][col] = -1
		}
	}

	function dp(k, n) {
		if(k === 1) {
			return n
		}

		if(n === 0) {
			return 0
		}

        if(memo[k-1][n-1] !== -1) {
        	return memo[k-1][n-1]
        }

		let res = Number.MAX_VALUE

		for(var i = 1; i <= n; i++) {
			res = Math.min(res, Math.max(dp(k - 1, i - 1), dp(k, n - i)) + 1)
		}
 
        memo[k-1][n-1] = res

		return res
	}

	return dp(k, n)
}
