function solution(ps, ms) {
	const dict = { diamond: 0, iron: 1, stone: 2 }
	const areas = []
	for (let i = 0, { length } = ms; i < length; i++) {
		if(i % 5 === 0) {
			areas.push([])
		}
		areas[Math.floor(i / 5)].push(dict[ms[i]])
	}
	for(let i = 0, { length } = areas; i < length; i++) {
		const dict = [0, 0, 0]
		const mod = areas[i]
		for(let j = 0; j < mod.length; j++) {
			for(let k = 0; k <= 2; k++) {
				dict[k] += 5 ** Math.max((k - mod[j]), 0)
			}
		}
		areas[i] = dict
	}

	const pSum = ps.reduce((acc, cur) => acc + cur, 0)

	areas.splice(pSum)

	areas.sort((a, b) => {
		if(a[2] !== b[2]) {
			return b[2] - a[2]
		}
		return b[1] - a[1]
	})

	let value = 0
	let pIdx = 0
	while(areas.length) {
		while(ps[pIdx] === 0) {
			pIdx++
			if(pIdx === 3) {
				return value
			}
		}
		const area = areas.shift()
		value += area[pIdx]
		ps[pIdx]--
	}
	return value
}










































console.log(
	// solution(
	// 	[1, 3, 2], ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]
	// ), // 12
	// solution(
	// 	[0, 1, 1], ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"]
	// ), // 50
	solution(
		[1, 0, 1],
		["stone", "stone", "stone", "stone", "stone", "iron", "iron", "iron", "iron", "iron", "diamond", "diamond"],
	),
)
