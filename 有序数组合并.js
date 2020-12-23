const mergeSortedArray = function(arr1, m, arr2, n) {
	let index1 = m - 1,
	    index2 = n - 1,
	    index = m + n - 1

	while(index2 >= 0) {
		if(index1 < 0) {
			arr1[index--] = arr2[index2--]
			continue 
		}

		arr1[index--] = arr1[index1] >= arr2[index2] ? arr1[index1--] : arr2[index2--]
	}

	return arr1
}

mergeSortedArray([1,2,3,7,8],5,[2,4,5,6],4)