function solution(arr) {
	const dictArr =  ["aya", "ye", "woo", "ma"]
	const dictMap = {}

	dictArr.forEach((subWord, idx) => dictMap[subWord] = idx)

	let cnt = 0
	for(let i = 0; i < arr.length; i++) {
		let word = arr[i]

		for(let j = 0; j < dictArr.length; j++) {
			word = word.replaceAll(dictArr[j], j)
		}

		// console.log(word)

		if(word.split('').reduce((flag, cur) => {
			if(flag) {
				if('0' <= cur && cur <= '3') {
					if(cur === flag) {
						return false
					}
					return cur
				} else {
					return false
				}
			} else {
				return false
			}
		}, true)) {
			cnt++
		}
	}
	return cnt
}

console.log(
	solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])
)
