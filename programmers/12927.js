function solution(n, works) {
	works.sort((a, b) => b - a)

	let index = 0
	while(n) {
		if((works[index] > 0) && (works[index] <= works[index + 1])) {
			index++
		} else {
			if(works[0] === 0) {
				break
			}
			for(let i = 0, min = Math.min(index, n - 1); i <= min; i++) {
				works[i]--
				n--
			}
		}
	}
	// console.log(works, index)

	return works.reduce((acc, cur) => acc + cur ** 2, 0)
}
function test(args, expect) {
	const result = solution(...args)
	console.log(result === expect, result, expect)
}
test([4, [4, 3, 3]], 12)
test([1, [2, 1, 2]], 6)
test([3, [1,1]], 0)
test([10, [10,10]], 50)
