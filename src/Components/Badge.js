import React from 'react'
import confLogo from '../Images/badge-header.svg'

class Badge extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <img src={confLogo} alt='Logo de la conferencia'/>
                </div>
                <div>
                    <img src='https://en.gravatar.com/avatar?id=identicon' alt='avatar'/>
                    <h1>Richard <br/> Kaufman</h1>
                </div>
                <div>
                    <p>Frontend Engineer</p>
                    <p>@icalderond</p>
                </div>
            </div>
        )
    }
}

export default Badge