
const info = [
    {
        img: './assets/img1.webp',
        title: 'Inseparables',
        description: 'Un adinerado hombre de negocios con tetraplejia contrata a un jardinero impulsivo como su asistente terapéutico. basada en hechos reales.',
        stars: 3.9,
        keywords: ['argentina', 'comedia'],
    },
    {
        img: './assets/img2.jpg',
        title: 'Granizo',
        description: 'Después de que le llueven críticas por fallar en el pronóstico de una tormenta, un meteorólogo se refugia en la casa de su hija e inicia un viaje de autodescubrimiento.',
        stars: 2,
        keywords: ['argentina', 'comedia', 'drama']
    },
    {
        img: './assets/img3.webp',
        title: 'Locura de amor en Las Vegas',
        description: 'Después de una noche de copas intensa en Las Vegas, dos extraños amanecen con la desafortunada novedad de que están casados.',
        stars: 4.9,
        keywords: ['comedia', 'romantica']
    },
    {
        img: './assets/img5.webp',
        title: 'El gran casamiento',
        description: 'En un fin de semana caótico, una pareja divorciada simula estar felizmente casada durante la boda de su hijo adoptivo para impresionar a su madre biológica.',
        stars: 3,
        keywords: ['comedia', 'romantica']
    },
    {
        img: './assets/img6.webp',
        title: 'Quiero robarme a la novia',
        description: 'Cuando se da cuenta de que su mejor amiga es su amor platónico, un casanova aprovecha su papel de "dama" de honor para sabotearle los planes de boda.',
        stars: 3.6,
        keywords: ['comedia', 'romantica']
    },
    {
        img: './assets/img7.webp',
        title: 'Enamorandome de mi ex',
        description: 'Diez años después de su divorcio, jane y Jake se reúnen para la graduación de su hijo y terminan durmiendo juntos.',
        stars: 4.5,
        keywords: ['comedia', 'romantica']
    },
    {
        img: './assets/img8.webp',
        title: 'Virgen a los 40',
        description: 'Andy, de 40 años, todavía "no lo ha hecho". Sus compañeros de trabajo (obsesionados por el sexo) se proponen ayudarlo a perder la virginidad.',
        stars: 2,
        keywords: ['comedia', 'romantica']
    },
    {
        img: './assets/img9.webp',
        title: 'El Ilusionista',
        description: 'Con los ojos puestos en una hermosa aristócrata, un talentoso ilusionsita llamado Eisenheim usa sus poderes para ganársela a su prometido: un príncipe heredero.',
        stars: 4,
        keywords: ['comedia', 'romantica']
    },
    {
        img: './assets/img10.webp',
        title: 'Un lugar llamado Notthing Hill',
        description: 'Un encuentro casual une al reservado dueño de una librería William Thacker y al ícono de Hollywood Anna Scott, quienes se entregan a un romance improbable.',
        stars: 4.5,
        keywords: ['comedia', 'romantica']
    },
    {
        img: './assets/img11.jpg',
        title: 'Mis dos vidas',
        description: 'En su graduación universitaria, la vida de Natalie se divide en dos realidades paralelas tras realizar una prueba de embarazo. ¿Qué le deparará el futuro?.',
        stars: 3,
        keywords: ['comedia', 'romantica']
    },
    {
        img: './assets/img12.webp',
        title: 'Ni en sueños',
        description: 'Un inesperado reencuentro lleva a una obstinada candidata presidencial a contratar a un imprudente redactor de discursos que desafía sus políticas... y su corazón.',
        stars: 2.6,
        keywords: ['comedia', 'romantica']
    },
    {
        img: './assets/img13.webp',
        title: 'Orgullo y prejuicio',
        description: 'En la novela de Jane Austen del siglo XIX, la Sra. Bennet quiere casar a sus hijas con prósperos caballeros, incluido el recién llegado Sr. Darcy.',
        stars: 4,
        keywords: ['drama', 'romantica']
    },
    {
        img: './assets/img14.jpg',
        title: 'La chica mas afortunada del mundo',
        description: 'La vida perfecta de una escritora en Nueva York comienza a desmoronarse cuando un documental sobre crímenes reales la obliga a entrentarse a su desgarradora historia escolar.',
        stars: 4.5,
        keywords: ['drama', 'suspenso']
    },
    {
        img: './assets/img15.jpg',
        title: 'Derry Girls',
        description: 'Pusieron una bomba en un puente cercano, pero Erin, Clare, Michelle, Oria y James estan preocupados por algo mucho mas grave: el primer dia en la escuela.',
        stars: 3.2,
        keywords: ['comedia']
    },
    {
        img: './assets/img16.webp',
        title: 'Ophelia',
        description: 'En esta versión de Hamlet contada desde la perspectiva de Ofelia, el amor entre la dama de compañía y el noble de Dinamarca se ve amenazado por la traición y la locura.',
        stars: 4,
        keywords: ['romantica', 'drama']
    },
    {
        img: './assets/img17.webp',
        title: 'Dolittle',
        description: 'Cuando la reina Victoria se enferma, el solitario doctor Dolittle, su joven aprendiz y sus amigos animales se embarcan en una aventura épica en busca de una cura mágica.',
        stars: 2.5,
        keywords: ['familiar', 'infantil']
    },
    {
        img: './assets/img18.jpg',
        title: 'Arrested development',
        description: 'Esta es la historia de una familia rica que perdió todo, y el hijo que no tuvo otra opción que mantenerla unida.',
        stars: 1,
        keywords: ['comedia']
    },
    {
        img: './assets/img19.jpg',
        title: 'Grace and Frankie',
        description: 'No son amigas, pero como sus esposos las dejaron para estar juntos, la rigida Grace y la excéntrica Frankie se reúnen en esta serie nominada a los Emmy.',
        stars: 4.3,
        keywords: ['comedia']
    },
    {
        img: './assets/img20.webp',
        title: 'First daughter',
        description: 'La hija del presidente de EE. UU. quiere asistir a la universidad como cualquier otra chica. Pero cuando su papá es el líder del mundo libre, lo "normal" es relativo.',
        stars: 4,
        keywords: ['comedia', 'romantica']
    },
    {
        img: './assets/img21.webp',
        title: 'La mujer de mis pesadillas',
        description: 'Eddie comienza a salir con la aparentemente fabulosa Lila y le propone matrimonio a la semana de conocerla. Pero en la luna de miel, Lila revela su horrible naturaleza.',
        stars: 3.6,
        keywords: ['comedia', 'romantica']
    },
    {
        img: './assets/img22.webp',
        title: '¿...Y dónde estan las rubias?',
        description: 'Dos agentes negros del FBI cuya misión es cuidar a dos aristócratas cabezas huecas se hacen pasar por dos muchachas blancas para atrapar a los posibles secuestradores.',
        stars: 2,
        keywords: ['comedia']
    },
]


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
        container.style.width = '32%'
        let modal = document.querySelector('.modal')
        modal.style.width = '50%'
        modal.style.opacity = '1'
        let modalImg = document.querySelector('.modalImage')
        let modalTitle = document.querySelector('.modalTitle')
        let modalDescription = document.querySelector('.modalDescription')

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

// Ventana modal

const bienvenida = () => {
    let modal = document.querySelector('.modal')
    modal.style.width = '0%'
    modal.style.opacity = '0'
    let moviesContainer = document.querySelector('.container')
    moviesContainer.style.width = '82%'
    let modalContainer = document.querySelector('.modalContainer')
    modalContainer.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', bienvenida)


// const crearModal = (img, title, descrip) => {

//     //Creacion de elementos
//     let modalContainer = document.createElement('DIV')
//     let modalImg = document.createElement('IMG')
//     let modalInfoContainer = document.createElement('DIV')
//     let modalTitle = document.createElement('H2')
//     let modalDescription = document.createElement('P')
//     let modalFooter = document.createElement('DIV')
//     let commands = document.createElement('DIV')
//     let play = document.createElement('DIV')
//     let addToList = document.createElement('DIV')
//     let like = document.createElement('DIV')
//     let playItem = document.createElement('I')
//     let addToListItem = document.createElement('I')
//     let likeItem = document.createElement('I')
//     let ratings = document.createElement('DIV')
//     let starsOuter = document.createElement('DIV')
//     let starsInner = document.createElement('DIV')
//     let numberRating = document.createElement('SPAN')

//     // Agregamos clases
//     modalContainer.classList.add('modalContainer')
//     modalImg.classList.add('modalImage')
//     modalInfoContainer.classList.add('modalInfoContainer')
//     modalTitle.classList.add('modalTitle')
//     modalDescription.classList.add('modalDescription')
//     modalFooter.classList.add('modalFooter')
//     commands.classList.add('commands')
//     play.classList.add('play')
//     addToList.classList.add('addToList')
//     like.classList.add('like')
//     playItem.classList.add('fa-solid fa-play')
//     addToListItem.classList.add('fa-regular fa-plus')
//     likeItem.classList.add('fa-regular fa-heartr')
//     ratings.classList.add('ratings')
//     starsOuter.classList.add('starsOuter')
//     starsInner.classList.add('starsInner')
//     numberRating.classList.add('numberRating')

//     // Anidacion de nodos
//     modalContainer.appendChild(modalImg)
//     modalContainer.appendChild(modalInfoContainer)
//     modalInfoContainer.appendChild(modalTitle)
//     modalInfoContainer.appendChild(modalDescription)
//     modalInfoContainer.appendChild(modalFooter)
//     modalFooter.appendChild(commands)
//     modalFooter.appendChild(ratings)
//     commands.appendChild(play)
//     commands.appendChild(addToList)
//     commands.appendChild(like)
//     play.appendChild(playItem)
//     addToList.appendChild(addToListItem)
//     like.appendChild(likeItem)
//     ratings.appendChild(starsOuter)
//     starsOuter.appendChild(starsInner)
//     ratings.appendChild(numberRating)
// }

// modal.appendChild(modalContainer)

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

// dropdownItem.forEach(item => {
//     item.addEventListener('click', (e) => {
//         let clicked = e.target.innerText
//         let er = new RegExp(clicked, "i")
//         for (let i = 0; i < items.length; i++){ 
//             let valor = items[i]
//             if(er.test(valor.innerText)){
//                 console.log('INCLUIDO')
//                 valor.classList.remove("filter")
//             }else{
//                 valor.classList.add("filter")
//             }
//         }
//     })
// })

// Dropdown menu

const listItem = document.querySelectorAll('.toggle')
const dropdownItems = document.querySelectorAll('.dropdown-menu')

for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener("click",()=>{
        dropdownItems[i].classList.toggle('show');
    })
}



// mouse events

let nav1 = document.querySelector('.navBar')
let nav2 = document.querySelector('.nav2')
let displayMovies = document.querySelector('.container')
let displayModal = document.querySelector('.modal')
let buscador = document.querySelector('.buscadorContainer')
let movieOptions = document.querySelector('.movie-options')
let pFullWidth = document.querySelectorAll('.navFullWidth')
console.log(pFullWidth)

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





