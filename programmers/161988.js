function solution(arr) {
	for(let i = 0, { length } = arr; i < length; i += 2) {
		arr[i] *= -1
	}
	const newArr = arr
	// const newArr = []

	// for(let i = 0, { length } = arr, c = 0; i < length; i++) {
	// 	const v = arr[i]
	// 	if(v === 0) {
	// 		continue
	// 	}
	// 	if(c === 0) {
	// 		c = v
	// 	} else {
	// 		if(c > 0 && v > 0) {
	// 			c += v
	// 		} else if(c < 0 && v < 0) {
	// 			c += v
	// 		} else {
	// 			newArr.push(c)
	// 			c = v
	// 		}
	// 	}
	// 	if(i === length - 1) {
	// 		newArr.push(v)
	// 	}
	// }

	const maxs = new Array(newArr.length)
	const mins = new Array(newArr.length)
	let max = -1/0
	let min = 1/0

	for(let i = 0, { length } = newArr; i < length; i++) {
		maxs[i] = Math.max(newArr[i], (maxs[i - 1] || 0) + newArr[i])
		mins[i] = Math.min(newArr[i], (mins[i - 1] || 0) + newArr[i])

		max = Math.max(max, maxs[i])
		min = Math.min(min, mins[i])
	}

	return Math.max(max, -min)
}

console.log(
	solution([2, 3, -6, 1, 3, -1, 2, 4]), // 10
)
