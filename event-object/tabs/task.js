const tabNav = document.querySelector('.tab__navigation')
const tabs = tabNav.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tab__content')

tabNav.addEventListener('click', (event) => {
	const clickTab = event.target.closest('.tab')
	if (clickTab === null) return // без этого валится с ошибками при нажатии не на вкладку

	const activeTab = tabNav.querySelector('.tab_active')
	const activeTabContent = document.querySelector('.tab__content_active')
	activeTab.classList.remove('tab_active')
	activeTabContent.classList.remove('tab__content_active')

	clickTab.classList.add('tab_active')
	const clickTabIndex = Array.from(tabs).indexOf(clickTab)
	tabContents[clickTabIndex].classList.add('tab__content_active') 
})

