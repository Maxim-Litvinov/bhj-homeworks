document.addEventListener('DOMContentLoaded', () => {
	const itemsContainer = document.getElementById('items')
	const loader = document.getElementById('loader')

	fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses').then(response => response.json()).then(data => {
		loader.classList.remove('loader_active')
		const valueData = data.response.Valute

		for (const currencyCode in valueData) {
			const currency = valueData[currencyCode]
			const currencyEl = document.createElement('div')
			currencyEl.classList.add('item')

			currencyEl.innerHTML = `
				<div class="item__code">
					${currency.CharCode}
				</div>
				<div class="item__value">
					${currency.Value}
				</div>
				<div class="item__currency">
					руб.
				</div>
			`
			itemsContainer.appendChild(currencyEl)
		}
	})
})