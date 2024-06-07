function solution(n, to) {
	const stack = []
	const map = {}
	function add(v, cnt) {
		if(v < 0) {
			return
		}
		if((map[v] == void 0) || (map[v][1] > cnt)) {
			stack.push([v, cnt])
			map[v] = [v, cnt]
		}
	}
	add(1, 2)
	add(n, 1)
	for(let i = 2; i <= 7; i++) {
		add(n ** i, i)
		add(Number(n.toString().repeat(i)), i)
	}

	let min = Infinity
	let i = 0
	while(i < stack.length) {
		const [v, cnt] = stack[i++]

		if(v === to) {
			min = Math.min(min, cnt)
		}

		for(let key in map) {
			const [v2, cnt2] = map[key]
			const next = cnt + cnt2
			if(next > 8) {
				continue
			}
			add(v + v2, next)
			add(v - v2, next)
			add(v * v2, next)
			add(Math.floor(v / v2), next)
		}
	}
	// for(let i = 1; i < 20; i++) {
	// 	console.log(i, map[i])
	// }
	// console.log(i)
	if(min > 8) {
		return -1
	}
	return min
}

console.log(
	solution(5, 12), // 4
	// solution(2, 11, 3) // 3
)
