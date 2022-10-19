let inicio = document.querySelector('.inicio')

let contentContainer = document.createElement('DIV')
contentContainer.classList.add('contentContainer')

let btnIngresar = document.createElement('BUTTON')
btnIngresar.classList.add('btnIngresar')
btnIngresar.textContent = 'Ingresar'

let btnCrearCuenta = document.createElement('BUTTON')
btnCrearCuenta.classList.add('btnCrearCuenta')
btnCrearCuenta.textContent = 'Crear cuenta'

contentContainer.appendChild(btnIngresar)
contentContainer.appendChild(btnCrearCuenta)

let textContainer = document.createElement('DIV')
let text = document.createElement('P')
let text2 = document.createElement('P')
textContainer.classList.add('textContainer')
text.classList.add('text')
text2.classList.add('text2')
textContainer.appendChild(text)
textContainer.appendChild(text2)

text.textContent = `CINE`
text2.textContent = `AR`

inicio.appendChild(contentContainer)
inicio.appendChild(textContainer)
