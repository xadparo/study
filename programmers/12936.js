function solution(n, k) {
	k--

	const f = (n, c = 1) => n > 1? f(n-1, n * c) : c
	const dict = new Array(n).fill(0).map((_, i) => i + 1)
	const arr = new Array(n)

	for(let i = 0; i < n; i++) {
		const r = n - i - 1
		const c = f(r)
		const di = r === 0? 0: Math.floor(k / c)

		arr[i] = dict.splice(di, 1)[0]

		k -= c * di
	}
	return arr
}

console.log(
	solution(3, 5), // [3,1,2]
	// solution(10, 484521), 
)

// 0123
// 01 23
