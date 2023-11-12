const elements = document.querySelectorAll('.has-tooltip')

let currentTooltip = null

function removeCurrentTooltip() {
  if (currentTooltip) {
    currentTooltip.remove()
    currentTooltip = null
  }
}

elements.forEach(element => {
  element.addEventListener('click', event => {

    event.preventDefault()

    removeCurrentTooltip()

    const tooltipText = element.getAttribute('title')

    const tooltipElement = document.createElement('div')
    tooltipElement.classList.add('tooltip')
    tooltipElement.textContent = tooltipText

    document.body.appendChild(tooltipElement)

    const elementRect = element.getBoundingClientRect()
    const tooltipRect = tooltipElement.getBoundingClientRect()
    const top = elementRect.top - tooltipRect.height - 10
    const left = elementRect.left + (elementRect.width - tooltipRect.width) / 2
    tooltipElement.style.top = `${top}px`
    tooltipElement.style.left = `${left}px`

    tooltipElement.classList.add('tooltip_active')

    currentTooltip = tooltipElement
  })
})

document.addEventListener('click', event => {
  if (!event.target.classList.contains('has-tooltip') && !event.target.classList.contains('tooltip')) {
    removeCurrentTooltip()
  }
})