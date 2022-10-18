
let modal = document.querySelector('.modal')

// Creacion de elementos
let modalContainer = document.createElement('DIV')
let modalImg = document.createElement('IMG')
let modalInfoContainer = document.createElement('DIV')
let modalTitle = document.createElement('H2')
let modalDescription = document.createElement('P')
let modalFooter = document.createElement('DIV')
let commands = document.createElement('DIV')
let play = document.createElement('DIV')
let addToList = document.createElement('DIV')
let like = document.createElement('DIV')
let playItem = document.createElement('I')
let addToListItem = document.createElement('I')
let likeItem = document.createElement('I')
let ratings = document.createElement('DIV')
let starsOuter = document.createElement('DIV')
let starsInner = document.createElement('DIV')
let numberRating = document.createElement('SPAN')
let closeButtonContainer = document.createElement('DIV')
let closeButton = document.createElement('I')

// Agregamos clases
modalContainer.classList.add('modalContainer')
modalImg.classList.add('modalImage')
modalInfoContainer.classList.add('modalInfoContainer')
modalTitle.classList.add('modalTitle')
modalDescription.classList.add('modalDescription')
modalFooter.classList.add('modalFooter')
commands.classList.add('commands')
play.classList.add('play')
addToList.classList.add('addToList')
like.classList.add('like')
playItem.classList.add('fa-solid')
playItem.classList.add('fa-play')
addToListItem.classList.add('fa-regular')
addToListItem.classList.add('fa-plus')
likeItem.classList.add('fa-regular')
likeItem.classList.add('fa-heart')
ratings.classList.add('ratings')
starsOuter.classList.add('starsOuter')
starsInner.classList.add('starsInner')
numberRating.classList.add('numberRating')
closeButtonContainer.classList.add('closeButtonContainer')
closeButton.classList.add('fa-solid')
closeButton.classList.add('fa-xmark')


// Anidacion de nodos
modalContainer.appendChild(modalImg)
modalContainer.appendChild(modalInfoContainer)
modalInfoContainer.appendChild(modalTitle)
modalInfoContainer.appendChild(modalDescription)
modalInfoContainer.appendChild(modalFooter)
modalFooter.appendChild(commands)
modalFooter.appendChild(ratings)
commands.appendChild(play)
commands.appendChild(addToList)
commands.appendChild(like)
play.appendChild(playItem)
addToList.appendChild(addToListItem)
like.appendChild(likeItem)
ratings.appendChild(starsOuter)
starsOuter.appendChild(starsInner)
ratings.appendChild(numberRating)
modalContainer.appendChild(closeButtonContainer)
closeButtonContainer.appendChild(closeButton)

modal.appendChild(modalContainer)

closeButton.addEventListener('click', () => {
    let container = document.querySelector('.container')
    container.style.width = '82%'
    container.style.left = '18%'
    let modal = document.querySelector('.modal')
    modal.style.width = '0'

    let modalContainer = document.querySelector('.modalContainer')
    modalContainer.style.display = 'none'
    console.log('cerrado')
    let nav2 = document.querySelector('.nav2')
    nav2.style.display = 'block'
})