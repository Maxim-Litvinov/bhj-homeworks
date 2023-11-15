document.addEventListener('DOMContentLoaded', () => {
	const progress = document.getElementById('progress')
	const form = document.getElementById('form')

	form.addEventListener('submit',  (e) => {
			e.preventDefault()

			const formData = new FormData(form)
			const xhr = new XMLHttpRequest()

			xhr.open('POST', form.action, true)

			xhr.upload.addEventListener('progress', (e) => {
					if (e.lengthComputable) {
							const percentComplete = (e.loaded / e.total) * 100
							progress.value = percentComplete
					}
			})

			xhr.onreadystatechange = () => {
					if (xhr.readyState === XMLHttpRequest.DONE) {
							if (xhr.status === 200) {
									alert('Файл успешно загружен!')
							} else {
									alert('Произошла ошибка при загрузке файла.')
							}
					}
			}

			xhr.send(formData)
	})
})