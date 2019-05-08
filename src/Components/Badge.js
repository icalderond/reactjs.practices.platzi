import React from 'react'
import confLogo from '../Images/badge-header.svg'
import './styles/Badge.css'

class Badge extends React.Component{
    render(){
        return (
            <div className='Badge'>
                <div className='Badge__header'>
                    <img src={confLogo} alt='Logo de la conferencia'/>
                </div>
                <div className='Badge__section-name'>
                    <img className='Badge__avatar' src='https://en.gravatar.com/avatar?id=icalderond' alt='avatar'/>
                    <h1>Israel <br/> Calderon</h1>
                </div>
                <div className='Badge__section-info'>
                    <h3>Frontend Engineer</h3>
                    <div>@icalderond</div>
                </div>
                <div className='Badge__footer'>
                    #icalderond
                </div>
            </div>
        )
    }
}

export default Badge