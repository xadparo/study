function solution(arr1, k) {
	let arr2 = []
	let cnt = 0

	arr1.sort((a, b) => a - b)

	if(arr1[arr1.length - 1] === 0) {
		return -1
	}
	if(arr1[0] >= k) {
		return 0
	}

	let i1 = 0
	let i2 = 0

	const get1 = () => (arr1[i1] === void 0) ? 1/0 : arr1[i1]
	const get2 = () => (arr2[i2] === void 0) ? 1/0 : arr2[i2]
	const pop = () => {
		if(get1() < get2()) {
			return arr1[i1++]
		}
		return arr2[i2++]
	}
	
	while(Math.min(get1(), get2()) < k) {
		const min1 = pop()
		const min2 = pop()

		if(isFinite(min2) === false) {
			return -1
		}
		arr2.push(min1 + min2 * 2)
		cnt++
	}

	return cnt
}

console.log(
	solution([2,1,4,3,5], 10), // 2
	solution([1, 2, 3, 9, 10, 12], 7), // 2
	solution([1,1,2,6], 24)
)
