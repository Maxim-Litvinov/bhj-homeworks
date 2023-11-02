
const rotatorCases = document.querySelectorAll('.rotator__case')

function rotateText() {
    const activeCase = document.querySelector('.rotator__case_active')
		const nextCase = activeCase.nextElementSibling || rotatorCases[0]
		const arrCollor = ['text-color-red', 'text-color-green', 'text-color-yellow', 'text-color-blue']

    activeCase.classList.remove('rotator__case_active', 'text-color-red', 'text-color-green', 'text-color-yellow', 'text-color-blue')

    nextCase.classList.add('rotator__case_active', `${arrCollor[Math.floor(Math.random()* 4)]}`)
}

setInterval(rotateText, 1000);