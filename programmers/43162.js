function solution(n, graph) {
	function iter(n) {
		const stack = [n]
		const visited = {}
		while(stack.length > 0) {
			const node = stack.pop()
			visited[node] = true
			graph[node].forEach((connect, neighbor) => {
				if(connect && !visited[neighbor]) {
					stack.push(neighbor)
				}
			})
		}
		return visited
	}

	let result = 0
	const targets = {}
	for(let i = 0; i < n; i++) {
		targets[i] = true
	}
	for(let i = 0; i < n; i++) {
		if(targets[i]) {
			const visited = iter(i)
			result++
			for(let idx in visited) {
				delete targets[idx]
			}
		}
	}
	return result
}
function test(args, expect) {
	const result = solution(...args)
	console.log(result === expect, result, expect)
}

test([3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]], 2)
test([3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]], 1)
