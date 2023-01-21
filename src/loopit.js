
const vid = document.querySelector('video')

const ui = document.createElement('div')
ui.classList.add('ui')
ui.innerHTML = 'radical'

vid.insertAdjacentElement('beforebegin', ui)
