function solution(arr) {
	let max = 0
	let f = (i, n) => (i + n) % n === i
	for(let i = 1, { length: len } = arr; i < len; i++) {
		let li = i - 1
		let ri = i
		let ls = arr[li]
		let rs = arr[ri]
		let lg = false
		let rg = false

		if(ls === rs) {
			max = Math.max(max, ls, rs)
		}

		while(f(li, len) && f(ri, len)) {
			if(ls === rs) {
				lg = true
				rg = true
			} else if(ls < rs) {
				lg = true
				rg = false
			} else {
				lg = false
				rg = true
			}

			if(lg) {
				if(f(li - 1, len)) {
					li--
					ls += arr[li]
				} else {
					break
				}
			}
			if(rg) {
				if(f(ri + 1, len)) {
					ri++
					rs += arr[ri]
				} else {
					break
				}
			}
			if(ls === rs) {
				max = Math.max(max, ls, rs)
			}
		}
	}
	return max
}

console.log(
	solution([1,1,2,3]), // 3
	// solution([1,2,4,5]), // 0
)
