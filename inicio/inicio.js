let inicio = document.querySelector('.inicio')

let contentContainer = document.createElement('DIV')
contentContainer.classList.add('contentContainer')

let h1Bienvenida = document.createElement('H1')
h1Bienvenida.classList.add('h1Bienvenida')

let btnIngresar = document.createElement('BUTTON')
btnIngresar.classList.add('btnIngresar')
btnIngresar.textContent = 'Ingresar'

let btnCrearCuenta = document.createElement('BUTTON')
btnCrearCuenta.classList.add('btnCrearCuenta')
btnCrearCuenta.textContent = 'Crear cuenta'

h1Bienvenida.textContent = '¿Qué vamos a ver hoy?'

contentContainer.appendChild(h1Bienvenida)
contentContainer.appendChild(btnIngresar)
contentContainer.appendChild(btnCrearCuenta)

let textContainer = document.createElement('DIV')
let text = document.createElement('P')
textContainer.classList.add('textContainer')
text.classList.add('text')
textContainer.appendChild(text)

text.textContent = 'En CINEMAR vas a encontrar las mejores producciones independientes de latinoamérica.'


inicio.appendChild(textContainer)
inicio.appendChild(contentContainer)
