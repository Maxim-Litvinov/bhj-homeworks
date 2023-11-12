document.addEventListener('DOMContentLoaded', () => {
	const input = document.getElementById('task__input')
	const form = document.getElementById('tasks__form')
	const list = document.getElementById('tasks__list')


	form.addEventListener('submit', (e) =>{
		e.preventDefault()
		addTask(list, input)
	})

	list.addEventListener('click', (e) => {
		if(e.target.classList.contains('task__remove')) {
			removeTask(e.target.parentNode)
		}
	})
})

function addTask (list, input) {
	const taskTitle = input.value

	if (taskTitle != '') {
		const task = document.createElement('div')
		task.classList.add('task')

		const taskTitleDiv = document.createElement('div')
		taskTitleDiv.classList.add('task__title')
		taskTitleDiv.textContent = taskTitle

		const removeBut = document.createElement('a')
		removeBut.classList.add('task__remove')
		removeBut.innerHTML = '&times;'

		task.appendChild(taskTitleDiv)
    task.appendChild(removeBut)

    list.appendChild(task)
    input.value = ''
	}
}

function removeTask(task) {
	task.remove()
}


