import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../Components/Navbar'
import Badge from '../Components/Badge';
import BadgeForm from '../Components/BadgeForm';

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className='BadgeNew__hero'>
                    <img className='img-fluid' src={header} alt='Logo'></img>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Badge  
                                firstName='Israel' 
                                lastName='Calderon'
                                twitter='@icalderond' jobTitle='Xamarin Developer'
                                avatar='https://s.gravatar.com/avatar/21e81fa2427e4f53870bd0d35176ed18?s=80'/>
                        </div>
                        <div className='col-6'>
                            <BadgeForm/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BadgeNew