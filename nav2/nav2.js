let nav2 = document.querySelector('.nav2')

let buscadorContainer = document.createElement('DIV')
buscadorContainer.classList.add('buscadorContainer')

let inputSearch = document.createElement('INPUT')
inputSearch.setAttribute('id', 'search')
inputSearch.setAttribute('type', 'search')
inputSearch.setAttribute('placeholder', 'Buscar')
inputSearch.classList.add('buscador')

let movieOptions = document.createElement('DIV')
movieOptions.classList.add('movie-options')

let optionsItem1 = document.createElement('DIV')
optionsItem1.classList.add('options-item')

let aToggle1 = document.createElement('A')
aToggle1.classList.add('toggle')

let toggleIcon1 = document.createElement('I')
toggleIcon1.classList.add('fa-solid')
toggleIcon1.classList.add('fa-caret-down')

let ulDropdown1 = document.createElement('UL')
ulDropdown1.classList.add('dropdown-menu')

let liDropdown1 = document.createElement('LI')
liDropdown1.classList.add('dropdown-item')
let liDropdown2 = document.createElement('LI')
liDropdown2.classList.add('dropdown-item')
let liDropdown3 = document.createElement('LI')
liDropdown3.classList.add('dropdown-item')
let liDropdown4 = document.createElement('LI')
liDropdown4.classList.add('dropdown-item')
let liDropdown5 = document.createElement('LI')
liDropdown5.classList.add('dropdown-item')
let liDropdown6 = document.createElement('LI')
liDropdown6.classList.add('dropdown-item')


let optionsItem2 = document.createElement('DIV')
optionsItem2.classList.add('options-item')

let aToggle2 = document.createElement('A')
aToggle2.classList.add('toggle')

let toggleIcon2 = document.createElement('I')
toggleIcon2.classList.add('fa-solid')
toggleIcon2.classList.add('fa-caret-down')

let ulDropdown2 = document.createElement('UL')
ulDropdown2.classList.add('dropdown-menu')

let liDropdown7 = document.createElement('LI')
liDropdown7.classList.add('dropdown-item')
let liDropdown8 = document.createElement('LI')
liDropdown8.classList.add('dropdown-item')
let liDropdown9 = document.createElement('LI')
liDropdown9.classList.add('dropdown-item')
let liDropdown10 = document.createElement('LI')
liDropdown10.classList.add('dropdown-item')
let liDropdown11 = document.createElement('LI')
liDropdown11.classList.add('dropdown-item')
let liDropdown12 = document.createElement('LI')
liDropdown12.classList.add('dropdown-item')

let optionsItem3 = document.createElement('DIV')
optionsItem3.classList.add('options-item')
let optionsItem4 = document.createElement('DIV')
optionsItem4.classList.add('options-item')
let optionsItem5 = document.createElement('DIV')
optionsItem5.classList.add('options-item')

let option3 = document.createElement('A')
option3.setAttribute('href', '#')
let option4 = document.createElement('A')
option4.setAttribute('href', '#')
let option5 = document.createElement('A')
option5.setAttribute('href', '#')

nav2.appendChild(buscadorContainer)
nav2.appendChild(movieOptions)

buscadorContainer.appendChild(inputSearch)

movieOptions.appendChild(optionsItem1)
movieOptions.appendChild(optionsItem2)
movieOptions.appendChild(optionsItem3)
movieOptions.appendChild(optionsItem4)
movieOptions.appendChild(optionsItem5)

optionsItem1.appendChild(toggleIcon1)

optionsItem1.appendChild(aToggle1)

optionsItem1.appendChild(ulDropdown1)

ulDropdown1.appendChild(liDropdown1)
ulDropdown1.appendChild(liDropdown2)
ulDropdown1.appendChild(liDropdown3)
ulDropdown1.appendChild(liDropdown4)
ulDropdown1.appendChild(liDropdown5)
ulDropdown1.appendChild(liDropdown6)

optionsItem2.appendChild(toggleIcon2)

optionsItem2.appendChild(aToggle2)

optionsItem2.appendChild(ulDropdown2)

ulDropdown2.appendChild(liDropdown7)
ulDropdown2.appendChild(liDropdown8)
ulDropdown2.appendChild(liDropdown9)
ulDropdown2.appendChild(liDropdown10)
ulDropdown2.appendChild(liDropdown11)
ulDropdown2.appendChild(liDropdown12)

optionsItem3.appendChild(option3)
optionsItem4.appendChild(option4)
optionsItem5.appendChild(option5)

aToggle1.textContent = 'Películas'
liDropdown1.textContent = 'Comedia'
liDropdown2.textContent = 'Accion'
liDropdown3.textContent = 'Drama'
liDropdown4.textContent = 'Ciencia Ficcion'
liDropdown5.textContent = 'Terror'
liDropdown6.textContent = 'Romantica'

aToggle2.textContent = 'Series'
liDropdown7.textContent = 'Comedia'
liDropdown8.textContent = 'Accion'
liDropdown9.textContent = 'Drama'
liDropdown10.textContent = 'Ciencia Ficcion'
liDropdown11.textContent = 'Terror'
liDropdown12.textContent = 'Romantica'

option3.textContent = 'Nuevos'
option4.textContent = 'Populares'
option5.textContent = 'Mi lista'