const deadCounter = document.getElementById('dead')
const lostCounter = document.getElementById('lost')

for (let i = 1; i <= 9; i++) {
	let hole = document.getElementById('hole' + i)
	hole.addEventListener('click', () => {
		if (hole.className.includes('hole_has-mole')) {
			deadCounter.textContent = parseInt(deadCounter.textContent) + 1
			if (parseInt(deadCounter.textContent) === 10) {
				alert('Вы выиграли! :)')
				resetStats()
			}
		} else {
			lostCounter.textContent = parseInt(lostCounter.textContent) + 1
			if (parseInt(lostCounter.textContent) === 5) {
				alert('Вы проиграли :(')
				resetStats()
			}
		}
	})
}

function resetStats() {
	const deadCounter = document.getElementById('dead')
	const lostCounter = document.getElementById('lost')
	deadCounter.textContent = '0'
	lostCounter.textContent = '0'
}