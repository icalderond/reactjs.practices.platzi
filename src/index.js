// const element = document.createElement('h1')
// element.innerText = 'Hello, Platzi Badges'

// const container = document.getElementById('app')

// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

// JSX
const element = <h1>Hello, Platzi </h1>
const container = document.getElementById('app')

// ( __que__ , __donde__ )
ReactDOM.render(element,container);