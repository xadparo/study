function solution(n) {
	const result = []
	const stack = [
			[n, true, 1, 3, 2]
	]
	while(stack.length) {
		const [l, f, start, end, extra] = stack.pop()
		
		if(f) {
			if(l > 1) {
				stack.push([l-1, true, extra, end, start])
			}
			stack.push([l, false, start, end, extra])
			if(l > 1) {
				stack.push([l-1, true, start, extra, end])
			}
		} else {
			result.push([start, end])
		}
	}

	return result
}
