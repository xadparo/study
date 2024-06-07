function solution(arr) {
	let length = arr.length
	let dp1 = new Array(length)
	let dp2 = new Array(length)

	if(length <= 3) {
		return Math.max(...arr)
	}

	const get = (i, lastUnused) => {
		if(lastUnused && (i === length - 1)) {
			return 0
		}
		return arr[i]
	}
	
	dp1[0] = arr[0]
	dp1[1] = 0

	dp2[0] = 0
	dp2[1] = arr[1]

	for(let i = 2; i < length; i++) {
		dp1[i] = Math.max(i >= 3? dp1[i - 3] + get(i, 1): 0, dp1[i - 2] + get(i, 1), dp1[i - 1])
		dp2[i] = Math.max(i >= 3? dp2[i - 3] + get(i, 0): 0, dp2[i - 2] + get(i, 0), dp2[i - 1])
	}

	// console.log(arr)
	// console.log(dp1)
	// console.log(dp2)

	return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1])
}

console.log(solution([14, 6, 5, 11, 3, 9, 2, 10]), 36)
// console.log(solution([1, 3, 2, 5, 4]), 8)
