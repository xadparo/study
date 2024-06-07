function solution(people, limit) {
	const map = {}
	function ad(v) {
		if(map[v] === undefined) {
			map[v] = 1
		} else {
			map[v]++
		}
	}
	function rm(v) {
		if(map[v]) {
			map[v]--
			if(map[v] === 0) {
				delete map[v]
			}
		}
	}
	people.forEach(ad)

	let cnt = 0

	let min = 1
	let max = limit
	while(min <= max) {
		if(!map[min]) {
			min++
			continue
		}
		if(!map[max]) {
			max--
			continue
		}
		if(min + max <= limit) {
			if(min !== max) {
				const nc = Math.min(map[min], map[max])
				map[min] -= nc
				map[max] -= nc
				cnt += nc
			} else {
				cnt += Math.round(map[min] / 2)
				delete map[min]
			}
		} else {
			cnt += map[max]
			delete map[max]
		}
	}

	return cnt
}

console.log(solution([70, 50, 80, 50], 100), 3)
console.log(solution([70, 80, 50], 100), 3)
