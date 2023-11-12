document.addEventListener('DOMContentLoaded', () => {
	const addButtons = document.querySelectorAll('.product__add')

	addButtons.forEach((button) => {
			button.addEventListener('click', () => {
					const product = button.closest('.product')
					const productId = product.getAttribute('data-id')
					const quantity = parseInt(product.querySelector('.product__quantity-value').innerHTML)
					const imgProduct = product.querySelector('.product__image').src

					addToBasket(productId, quantity, imgProduct)
			})
	})

	document.addEventListener('click', (e) => {
			const targetClass = e.target.classList

			if (targetClass.contains('product__quantity-control_dec') || targetClass.contains('product__quantity-control_inc')) {
					updateQuantity(e)
			}
	})

	function addToBasket(productId, quantity, imgProduct) {
			const itemInBasket = document.querySelector(`.cart__product[data-id="${productId}"]`)

			if (itemInBasket) {
					const existQuantity = parseInt(itemInBasket.querySelector('.cart__product-count').innerText)
					itemInBasket.querySelector('.cart__product-count').innerText = existQuantity + quantity
			} else {
					const cartProducts = document.querySelector('.cart__products')
					const newCartItem = document.createElement('div')
					newCartItem.classList.add('cart__product')
					newCartItem.setAttribute('data-id', productId)

					newCartItem.innerHTML = `
							<img class="cart__product-image" src="${imgProduct}">
							<div class="cart__product-count">${quantity}</div>
					`

					cartProducts.appendChild(newCartItem)
			}
	}

	function updateQuantity(e) {
			const product = e.target.closest('.product')
			const quantityEl = product.querySelector('.product__quantity-value')

			let currentQuantity = parseInt(quantityEl.innerText)

			if (e.target.classList.contains('product__quantity-control_dec')) {
					currentQuantity = Math.max(1, currentQuantity - 1)
			} else {
					currentQuantity += 1
			}

			quantityEl.innerText = currentQuantity
	}
})