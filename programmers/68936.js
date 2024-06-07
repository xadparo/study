function solution(arr) {
	const len = arr.length
	var level = 0
	while(2 ** level < len) {
		level++
	}

	function q({ level, x, y }) {
		if(level > 0) {
			const size = 2 ** (level - 1)
			const subs = [
				{ level: level - 1, x, y },
				{ level: level - 1, x: x + size, y },
				{ level: level - 1, x, y: y + size },
				{ level: level - 1, x: x + size, y: y + size },
			].map(sub => {
				return {
					info: sub,
					value: q(sub)
				}
			})
			const result = [0, 0]
			if(subs.every(({ value }) => (value[0] === 0) && (value[1] === 1))) {
				result[1]++
			} else if(subs.every(({ value }) => (value[0] === 1) && (value[1] === 0))) {
				result[0]++
			} else {
				subs.forEach(({ value }) => {
					result[0] += value[0]
					result[1] += value[1]
				})
			}
			// console.log(level, y, x, result)
			return result
		} else if(level === 0) {
			const result = [0, 0]
			result[arr[y][x]]++
			return result
		}
	}
	return q({
		level,
		x: 0,
		y: 0,
	})
}
console.log(
	// solution([[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]])
	solution([[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]])
)
