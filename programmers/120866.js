function solution(board) {
	const y = board.length
	const x = board[0].length

	const nd = (n, d) => (n + d) % d === n
	const valid = (...pos) => {
		return nd(pos[0], y) && nd(pos[1], x)
	}

	for(let i = 0; i < y; i++) {
		const row = board[i]
		for(let j = 0; j < x; j++) {
			if(row[j] === 1) {
				for(let i2 = -1; i2 <= 1; i2++) {
					for(let j2 = -1; j2 <= 1; j2++) {
						if(valid(i + i2, j + j2) && board[i + i2][j + j2] === 0) {
							board[i + i2][j + j2] = 2
						}
					}
				}
			}
		}
	}
	
	let cnt = 0

	for(let i = 0; i < y; i++) {
		const row = board[i]
		for(let j = 0; j < x; j++) {
			if(row[j] === 0) cnt++
		}
	}

	return cnt
}

console.log(
	solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]])
)
// 16
