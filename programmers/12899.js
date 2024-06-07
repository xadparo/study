let str = '124'
function solution(n) {
	let i = 0
	while(n >= 3 ** i) {
		n -= 3 ** i
		i++
	}
	return n.toString(3).padStart(i, '0').split('').map(v => str[v]).join('')
}

for(let i = 1; i <= 10; i++) {
	console.log(i, solution(i))
}
