function solution(m) {
	const h = m.length
	const w = m[0].length

	const dirs = [
			[0, 1],
			[1, 0],
			[0, -1],
			[-1, 0],
	]
	const nInDiv = (n, div) => ((n + div) % div) === n
	const isValidPos = (y, x) => nInDiv(y, h) && nInDiv(x, w)
	const getNexts = (y, x) => {
		const nexts = []
		for(let i = 0; i < 4; i++){
			const ny = y + dirs[i][0]
			const nx = x + dirs[i][1]
			if(isValidPos(ny, nx) && m[ny][nx] !== 0){
				nexts.push([ny, nx])
			}
		}
		return nexts
	}
	const convert1DPos = (y, x) => y * w + x

	const graph = {}

	for(let i = 0; i < h; i++){
		for(let j = 0; j < w; j++){
			if(m[i][j] === 1){
				const nexts = getNexts(i, j)
				if(nexts.length === 0){
					return -1
				}
				const s = convert1DPos(i, j)
				graph[s] = {}
				nexts.forEach(next => {
					const e = convert1DPos(...next)
					graph[s][e] = true
				})
			}
		}
	}

	const deque = [[0, 1]]
	const mins = { 0: 1 }
	while(deque.length) {
		const [s, v] = deque.pop()
		const edges = graph[s]

		// mins[s] = v

		for(let e in edges) {
			if(mins[e] === void 0) {
				mins[e] = v + 1
				deque.unshift([e, v + 1])
			}
		}
	}
	const result = mins[convert1DPos(h - 1, w - 1)]

	if(result === void 0) {
		return -1
	}
	return result
}

































console.log(
	solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]), // 11
	// solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]), // -1
)
