const firstUniqChar = function(s) {
	if(!s) {
		return false
	}

	let map = new Map()

	for(let c of s) {
		if(map.has(c)) {
			map.set(c, map.get(c) + 1)
		} else {
			map.set(c, 1)
		}
	}

	for(let c of map.keys) {
		if(map.get(c) === 1) {
			return c
		}
	}

	return false
}