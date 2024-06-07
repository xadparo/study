function solution(gems) {
	const map = {}

	let { length } = gems
	let cnt = 0
	for(let i = 0; i < length; i++) {
		const gem = gems[i]
		if(map[gem] === void 0) {
			map[gem] = 0
			cnt++
		}
		map[gem]++
	}
	let [s, e] = [0, 0]
	let rMap = { [gems[s]]: 1 }
	let rCnt = 1
	let min = 1/0
	let r = null

	// console.log(s, e, rMap, `${rCnt}/${cnt}`)
	function add(v) {
		if((rMap[v] || 0) === 0) {
			rMap[v] = 0
			rCnt++
		}
		rMap[v]++
	}
	function remove(v) {
		rMap[v]--
		if(rMap[v] === 0) {
			rCnt--
		}
	}
	function eNext() {
		e++
		add(gems[e])
	}
	function sNext() {
		remove(gems[s])
		s++
	}
	while(e < length) {
		if((rCnt === cnt) && (min > e - s)) {
			min = e - s
			r = [s + 1, e + 1]
		}
		if(rCnt < cnt) {
			eNext()
		} else {
			sNext()
		}
		// console.log(s, e, rCnt)
	}
	return r
}

console.log(
	solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]),	// [3, 7]
	solution(["AA", "AB", "AC", "AA", "AC"]),	// [1, 3]
	solution(["XYZ", "XYZ", "XYZ"]),	// [1, 1]
	solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]),	// [1, 5]
)
