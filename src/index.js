// const element = document.createElement('h1')
// element.innerText = 'Hello, Platzi Badges'

// const container = document.getElementById('app')

// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const sum = (a,b) => a + b;

var nombre = 'Jorge'

// JSX
// const jsxi = <h1>Hello, Platzi </h1>;
// const element = React.createElement('a',{href:'https://platzi.com'},'Hello, Platzi')

// const element =<h1>Esto es una variable {nombre}.
// <br/> Esta es una funcion ({sum(3,8)})
// <br/> Esto es undefined ({undefined}) ({null}) </h1>;

const element = React.createElement(
    'div',
    {},
    React.createElement('h1',{},'Soy Israel'),
    React.createElement('p',{},'Soy Ingeniero')
)

// const element = React.createElement(
//     'h1',{},`Hola soy ${nombre}`
// )

const container = document.getElementById('app')

// ( __que__ , __donde__ )
ReactDOM.render(element,container);