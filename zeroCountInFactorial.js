// 计算n的阶乘有多少个尾部0

function zeroCountInFactorial(n) {
    let count = 0

    if(n < 0) {
    	return -1
    }

    for(let i = 5; n / i > 0; i *= 5) {
    	count += Math.floor(n / i)
    }

    return count
}