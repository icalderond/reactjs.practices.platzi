import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Badge from './Components/Badge'
import './global.css'

const container = document.getElementById('app');
ReactDOM.render
(
<Badge firstName = 'Israel' 
lastName = 'Calderon'
jobTitle = 'Frontend Engineer'
twitter = '@icalderond'
avatar = 'https://en.gravatar.com/avatar?id=icalderond'
/>,container);