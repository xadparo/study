function solution(str) {
	let length = str.length
	let min = length

	for(let i = 1, max = Math.ceil(length / 2); i <= max; i++) {
		// if((i < 8) || (i > 10)) {
		// 	continue
		// }
		let last = str.slice(0, i)
		let eqCnt = 1
		let c = length

		function harvest() {
			if(eqCnt === 1) {
				return
			}
			c = c - (i * eqCnt) + i + eqCnt.toString().length
			// console.log(i, eqCnt)
			// console.log(length - i * eqCnt, eqCnt.toString().length, i)
			// console.log(last, eqCnt, c)
		}

		for(let j = 1; j * i < length; j++) {
			let next = str.slice(j * i, j * i + i)

			if(last === next) {
				eqCnt++
			} else {
				harvest()
				eqCnt = 1
				last = next
			}
		}
		harvest()

		min = Math.min(min, c)
	}

	return min
}










































console.log(
	solution("aabbaccc"), // 7
	solution("ababcdcdababcdcd"), // 9 
	solution("abcabcdede"), // 8
	solution("abcabcabcabcdededededede"), // 14
	solution("xababcdcdababcdcd"), // 17
	// solution("ababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdabababcdcdab"),
	// 13
)
