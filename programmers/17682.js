function solution(str) {
	const stack = []
	for(let i = 0, { length } = str; i < length; i++) {
		const char = str[i]

		if(char === 'S') {
			stack.push(stack.pop() ** 1)
		} else if(char === 'D') {
			stack.push(stack.pop() ** 2)
		} else if(char === 'T') {
			stack.push(stack.pop() ** 3)
		} else if(char === '*') {
			if(stack.length >= 2) {
				const a = stack.pop()
				const b = stack.pop()

				stack.push(b * 2)
				stack.push(a * 2)
			} else {
				stack.push(stack.pop() * 2)
			}
		} else if(char === '#') {
			stack.push(stack.pop() * -1)
		} else {
			const v = parseInt(char)
			if((v === 0) && (stack[stack.length - 1] === 1)) {
				stack.pop()
				stack.push(10)
			} else {
				stack.push(v)
			}
		}
	}

	console.log(stack)

	return stack.reduce((acc, cur) => acc + cur, 0)
}

console.log(
	// solution('1S*2T*3S'), // 23
	// solution(`1D2S3T*`), /// 59
	solution('1D2S#10S') // 9
)
