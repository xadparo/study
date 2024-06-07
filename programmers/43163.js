function solution(begin, target, words) {
	const graph = {}

	words.push(begin)
	// words.push(target)
	words.forEach(word => {
		graph[word] = {}
	})

	const { length } = words
	for(let i = 0; i < length; i++) {
		const word1 = words[i]
		for(let j = i + 1; j < length; j++) {
			const word2 = words[j]
			const diff = word1.split('').filter((char, index) => char !== word2[index]).length
			if(diff === 1) {
				graph[word1][word2] = true
				graph[word2][word1] = true
			}
		}
	}

	// console.log(words, graph)
	
	const stack = [[begin, 0]]
	const visited = {}

	while(stack.length) {
		const [word, count] = stack.pop()

		// console.log(word, count)

		if(word === target) {
			return count
		}
		visited[word] = true

		const nextWords = Object.keys(graph[word] || {})
		nextWords.forEach(nextWord => {
			if(!visited[nextWord]) {
				stack.push([nextWord, count + 1])
			}
		})
	}
	return 0
}
function test(args, expect) {
	const result = solution(...args)
	console.log(result === expect, result, expect)
}
test(["hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]], 4)
test(["hit", "cog", ["hot", "dot", "dog", "lot", "log"]], 0)
