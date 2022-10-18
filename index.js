import data from './info.json' assert {type: 'json'}

const info = data["data"]


// Añadir peliculas dinámicamente

let container = document.querySelector('.container');

const addMovie = (img, title, description, stars, keywords) => {

    // Creacion de elementos
    let movieContainer = document.createElement('DIV')
    let movieImage = document.createElement('IMG')
    let movieTitle = document.createElement('H2')
    let movieDescription = document.createElement('P')
    let movieKeywords = document.createElement('P')

    // Agregamos clases
    movieImage.setAttribute("src", img)
    movieContainer.classList.add('movieContainer')
    movieImage.classList.add('movieImage')
    movieTitle.classList.add('movieTitle')
    movieDescription.classList.add('movieDescription')
    movieKeywords.classList.add('keywords')

    // Agregamos textNodes
    movieTitle.textContent = title
    movieDescription.textContent = description
    movieKeywords.textContent = keywords

    movieContainer.appendChild(movieImage)
    movieContainer.appendChild(movieTitle)
    movieContainer.appendChild(movieDescription)
    movieContainer.appendChild(movieKeywords)
    movieTitle.style.display = 'none'
    movieDescription.style.display = 'none'
    movieKeywords.style.display = 'none'


    // Eventos
    movieContainer.addEventListener('mouseover', () => {
        movieContainer.classList.add('hoverEffect')
    })
    movieContainer.addEventListener('mouseleave', () => {
        movieContainer.classList.remove('hoverEffect')
    })

    
        // Ratings
    let starsTotal = 5
    function getRatings() {
        for (let i = 0; i < info.length; i++) {
            const starPercentage = (stars / starsTotal) * 100;
            const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`
            document.querySelector(`.starsInner`).style.width = starPercentageRounded;
            let numberRating = document.querySelector('.numberRating')
            numberRating.innerText = `${stars}`;
        }
    }

    // Ventana modal
    movieContainer.addEventListener('click', () => {
        container.style.width = '46%'
        let modal = document.querySelector('.modal')
        modal.style.width = '50%'
        modal.style.display = 'inline-block'
        modal.style.visibility = 'visible'
        container.style.left = '4%'
        modal.style.opacity = '1'
        let modalImg = document.querySelector('.modalImage')
        let modalTitle = document.querySelector('.modalTitle')
        let modalDescription = document.querySelector('.modalDescription')
        let nav2 = document.querySelector('.nav2')
        nav2.style.display = 'none'

        let modalContainer = document.querySelector('.modalContainer')
        modalContainer.style.display = 'block'

        modalImg.setAttribute("src", img)
        modalTitle.innerText = title
        modalDescription.innerHTML = description
        getRatings()
    })

    return movieContainer;
}



let elementoTemporal = document.createDocumentFragment();

for (let i = 0; i < info.length; i++) {
    let newMovie = addMovie(info[i].img, info[i].title, info[i].description, info[i].stars, info[i].keywords);
    elementoTemporal.appendChild(newMovie);
}

container.appendChild(elementoTemporal)

// Ventana bienvenida

    let modal = document.querySelector('.modal')
    let moviesContainer = document.querySelector('.container')
const bienvenida = () => {
    moviesContainer.style.width = '82%'
    nav1.style.visibility = 'hidden'
    nav2.style.visibility = 'hidden'
    modal.style.visibility = 'hidden'
    moviesContainer.style.visibility = 'hidden'
}

document.addEventListener('DOMContentLoaded', bienvenida)

let btnIngresar = document.querySelector('.btnIngresar')
let inicio = document.querySelector('.inicio')
const quitarBienvenida = () => {
    inicio.style.display = 'none'
    nav1.style.visibility = 'visible'
    nav2.style.visibility = 'visible'
    modal.style.display = 'none'
    moviesContainer.style.visibility = 'visible'
}

btnIngresar.addEventListener('click', quitarBienvenida)


// Filtro de búsqueda

let inputSearch = document.querySelector('#search')
let titulos = document.querySelectorAll('.movieContainer')

const items = []
for(let titulo of titulos){
    items.push(titulo)
}

inputSearch.addEventListener('keyup', e => {
    let text = e.target.value.toLowerCase()
    let documentFragment = document.createDocumentFragment();
    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.toLowerCase().includes(text)) {
            documentFragment.appendChild(items[i])
        }
    }
    document.querySelector(".container").innerHTML = '';
    document.querySelector(".container").appendChild(documentFragment)
})

// Filtors por categorias

const dropdownItem = document.querySelectorAll('.dropdown-item')

for (let i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].addEventListener('click', e => {
        let category = e.target.textContent.toLowerCase()
        let documentFragment = document.createDocumentFragment()
        for(let x = 0; x < items.length; x++) {
            if (items[x].textContent.toLowerCase().includes(category)) {
                documentFragment.appendChild(items[x])
            }
        }
        document.querySelector(".container").innerHTML = '';
        document.querySelector(".container").appendChild(documentFragment)
    })
}

// Dropdown menu

const listItem = document.querySelectorAll('.toggle')
const dropdownItems = document.querySelectorAll('.dropdown-menu')

for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener("click",()=>{
        dropdownItems[i].classList.toggle('show');
    })
}

// mouse events

let nav1 = document.querySelector('.nav1')
let nav2 = document.querySelector('.nav2')
let displayMovies = document.querySelector('.container')
let displayModal = document.querySelector('.modal')
let buscador = document.querySelector('.buscadorContainer')
let movieOptions = document.querySelector('.movie-options')
let pFullWidth = document.querySelectorAll('.navFullWidth')

nav1.addEventListener('mouseenter', () => {
    nav1.style.width = '10%'
    //nav2.style.width = '12%'
    //nav2.style.left = '6%'
    nav1.style.alignItems = 'flex-start'
    nav2.style.opacity = 0
    for(let i = 0; i < pFullWidth.length; i++) {
        pFullWidth[i].style.display = 'block'
        pFullWidth[i].style.opacity = 1
        pFullWidth[i].style.transition = '2s'
    }

})

nav1.addEventListener('mouseleave', () => {
    nav1.style.width = '4%'
    nav1.style.alignItems = 'center'
    nav2.style.opacity = 1
    for(let i = 0; i < pFullWidth.length; i++) {
        pFullWidth[i].style.display = 'none'
        pFullWidth[i].style.opacity = 0
        pFullWidth[i].style.transition = '2s'
    }
})



// Problema: cuando haces click en "peliculas" se abre tambien series. Como hacer para que se abra el dropdown menu del elemento al que estas clickeando y nada mas? RESUELTO





