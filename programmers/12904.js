function solution(str) {
	let max = 1
	for(let i = 0, { length } = str; i < length; i++) {
		for(let j = 1; i + j < length; j++) {
			if(i - j < 0) break
			if(str[i-j] !== str[i+j]) {
				break
			}
			max = Math.max(max, j * 2 + 1)
		}
		for(let j = 1; i + j < length; j++) {
			if(i - j + 1 < 0) break
			if(str[i-j+1] !== str[i+j]) {
				break
			}
			max = Math.max(max, j * 2)
		}
	}
	return max
}

console.log(solution("abcdcba")) // 7 
console.log(solution("abacde")) // 3
