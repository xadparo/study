function solution(n) {
	let div = (1e9 + 7)
	if(n % 2 === 1) {
		return 0
	}
	n = n / 2
	const arr = new Array(n)
	arr[0] = 0
	arr[1] = 3
	arr[2] = 11

	const f = n => {
		if(arr[n] !== void 0) {
			return arr[n]
		}
		arr[n] = (f(n - 1) * 4 - f(n - 2)) % div

		if(arr[n] < arr[n - 1]) {
			arr[n] += div
		}

		return arr[n] 
	}
	for(let i = 1; i < n; i++) {
		f(i)
		// if(f(i) < 0) {
		// 	console.log(i)
		// 	return
		// }
	}
	// console.log(arr)
	return f(n) % div
}
console.log(
	solution(4), // 11
	solution(6),
	solution(8),
	solution(10),
	solution(5000), // 658712818
)
