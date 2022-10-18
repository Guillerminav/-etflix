
let nav1 = document.querySelector('.nav1')

let topOptions = document.createElement('DIV')
topOptions.classList.add('topOptions')

let titleContainer = document.createElement('DIV')
titleContainer.classList.add('titleContainer')

let h1Title = document.createElement('H1')
h1Title.classList.add('pageTitle')

let titleLink = document.createElement('A')
titleLink.setAttribute('href', '../index.html')

let spanTitle = document.createElement('SPAN')
spanTitle.classList.add('navFullWidth')
spanTitle.classList.add('spanTitle')

let options = document.createElement('DIV')
options.classList.add('options')

let iconVer = document.createElement('I')
iconVer.classList.add('fa-solid')
iconVer.classList.add('fa-bars')

let iconVerText = document.createElement('P')
iconVerText.classList.add('navFullWidth')

let userContainer = document.createElement('DIV')
userContainer.classList.add('userContainer')

let iconUser = document.createElement('I')
iconUser.classList.add('fa-solid')
iconUser.classList.add('fa-user')

let iconUserText = document.createElement('P')
iconUserText.classList.add('navFullWidth')

let bottomOptions = document.createElement('DIV')
bottomOptions.classList.add('bottomOptions')

let settingsContainer = document.createElement('DIV')
settingsContainer.classList.add('settingsContainer')

let iconSettings = document.createElement('I')
iconSettings.classList.add('fa-solid')
iconSettings.classList.add('fa-gear')

let iconSettingsText = document.createElement('P')
iconSettingsText.classList.add('navFullWidth')


nav1.appendChild(topOptions)
nav1.appendChild(bottomOptions)

topOptions.appendChild(titleContainer)
topOptions.appendChild(options)
topOptions.appendChild(userContainer)

titleContainer.appendChild(h1Title)
h1Title.appendChild(titleLink)
titleLink.appendChild(spanTitle)

options.appendChild(iconVer)
options.appendChild(iconVerText)

userContainer.appendChild(iconUser)
userContainer.appendChild(iconUserText)

bottomOptions.appendChild(settingsContainer)
settingsContainer.appendChild(iconSettings)
settingsContainer.appendChild(iconSettingsText)

spanTitle.textContent = 'inemAR'
titleLink.textContent = 'C'

iconVerText.textContent = 'Ver ahora'
iconUserText.textContent = 'Mi cuenta'
iconSettingsText.textContent = 'Configuración'

