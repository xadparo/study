function solution(word) {
	const arr = 'AEIOU'.split('')
	const map = {}
	
	arr.forEach((v, i) => map[v] = i + 1)

	// console.log(arr, map)
	
	for(let i = 1, str = 'A'; true; i++) {

		if(str === word) {
			return i
		}

		// console.log(str)
		
		if(str.length < 5) {
				str += 'A'
		} else { // carry
			for(let j = str.length - 1; j >= 0; j--) {
				// console.log(str, j, str[j], map[str[j]], arr[map[str[j]]])
				if(str[j] === 'U') {
					str = str.slice(0, j)
				} else {
					str = str.slice(0, j) + arr[map[str[j]]] + str.slice(j + 1)
					break
				}
			}
		}
	}
}
console.log(solution('AAAAE')) // 6
console.log(solution('AAAE')) // 10
console.log(solution('I')) // 1563
console.log(solution('EIO')) // 1189
