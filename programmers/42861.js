function solution(n, costs) {
	let group = {}
	for(let i = 0; i < n; i++) {
		group[i] = { [i]: true }
	}
	costs
		.sort((a, b) => a[2] - b[2])
		.forEach(([s, e, v]) => {
			const sg = group[s]
			const eg = group[e]

			if(sg !== eg) {
				const mg = {...sg, ...eg, v: v + (sg.v || 0) + (eg.v || 0)}
		
				for(let node in mg) {
					if(node !== 'v') {
						group[node] = mg
					}
				}
			}
		})
	return group[0].v
}

console.log(
	solution(4, [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]), // 4
)
