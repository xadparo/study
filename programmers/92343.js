// function solution(info, edges) {
// 	const tree = {}

// 	function createNode(n) {
// 		if(tree[n]) {
// 			return tree[n]
// 		}
// 		const value = {
// 			original: info[n],
// 			sheep: 0,
// 			wolf: 0,
// 		}
// 		if(info[n]) {
// 			value.wolf++
// 		} else {
// 			value.sheep++
// 		}
// 		const node = {
// 			index: n,
// 			upper: null,
// 			value,
// 			child: [],
// 		}
// 		tree[n] = node
// 		return node
// 	}
// 	function removeNode(node) {
// 		if(node.child.length === 2) {
// 			return false
// 		}
// 		node.upper.child = [...node.upper.child, ...node.child].filter(n => n !== node)
// 		node.child.upper = node.upper
// 		delete tree[node.index]
// 		return true
// 	}
// 	function drainNode(node) {
// 		if(node.upper === null) {
// 			return false
// 		}
// 		if(removeNode(node)) {
// 			node.upper.value.sheep += node.value.sheep
// 			node.upper.value.wolf += node.value.wolf
// 		}
// 	}
// 	const root = createNode(0)

// 	edges.forEach(edge => {
// 		const [a, b] = edge
// 		const aNode = createNode(a)
// 		const bNode = createNode(b)

// 		aNode.child.push(bNode)
// 		bNode.upper = aNode
// 	})

// 	function preorder(node, func) {
// 		const stack = [node]
// 		while(stack.length) {
// 			const node = stack.shift()
// 			func(node)
// 			stack.push(...node.child)
// 		}
// 	}
// 	function postorder(node, func) {
// 		const stack = [node]
// 		while(stack.length) {
// 			const node = stack.pop()
// 			if(typeof node === 'function') {
// 				node()
// 			} else {
// 				stack.push(() => func(node))
// 				stack.push(...node.child)
// 			}
// 		}
// 	}

// 	// 트리 정리
// 	postorder(root, node => {
// 		// 단말노드 처리
// 		if(node.child.length === 0) { // 자식이 없는 경우
// 			if(node.value.sheep === 0) { // 늑대뿐인 경우, 제거
// 				removeNode(node)
// 			} else if (node.value.wolf <= node.value.sheep) { // 늑대보다 양이 같거나 많다면 드레인
// 				drainNode(node)
// 			}
// 		} else if(node.child.length === 1) { // 자식이 1개인 경우
// 			if(node.value.wolf <= node.value.sheep) { // 늑대가 양보다 같거나 많다면 드레인
// 				drainNode(node)
// 			}
// 		}
// 	})

// 	function getMax(node) {
// 		if()
// 	}
// 	return getMax(node)
// }
// function test(args, expect) {
// 	const result = solution(...args)
// 	console.log(result === expect, result, expect)
// }

// test([[0,0,1,1,1,0,1,0,1,0,1,1], [[0,1],[1,2],[1,4],[0,8],[8,7],[9,10],[9,11],[4,3],[6,5],[4,6],[8,9]]], 5)
// test([[0,1,0,1,1,0,1,0,0,1,0], [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[4,8],[6,9],[9,10]]], 5)
