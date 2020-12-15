// 八皇后问题js解法

let solveNQueens = function(n) {
	let res = []
	let columns = []
	let dia1 = []
	let dia2 = []

	let putQueen = (rowIndex, row) => {
		if(rowIndex === n) {
			res.push(generateBoard(row))
			return
		}

		for(let columnIndex = 0; columnIndex < n; columnIndex++) {
			let columnNotConflict = !columns[columnIndex]
			let dia1NotConflict = !dia1[rowIndex + columnIndex]
			let dia2NotConflict = !dia2[rowIndex - columnIndex]

			if(columnNotConflict && dia1NotConflict && dia2NotConflict) {
				columns[columnIndex] = true
				dia1[rowIndex + columnIndex] = true
				dia2[rowIndex - columnIndex] = true

				putQueen(rowIndex + 1, row.concat(columnIndex))

				columns[columnIndex] = false
                dia1[rowIndex + columnIndex] = false
                dia2[rowIndex - columnIndex] = false
			}
		}
	}

	putQueen(0, [])

	return res
}