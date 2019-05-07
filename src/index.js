// const element = document.createElement('h1')
// element.innerText = 'Hello, Platzi Badges'

// const container = document.getElementById('app')

// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import Badge from './Components/Badge'


const element = (
    <div>
        <h1>Hola, soy Israel</h1>
        <p>Soy Ingeniero backend</p>
    </div>
);
const container = document.getElementById('app');
ReactDOM.render(<Badge/>,container);