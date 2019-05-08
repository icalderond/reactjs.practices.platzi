import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Badge from '../Components/Badge';
import BadgeForm from '../Components/BadgeForm';

class BadgeNew extends React.Component{
    state = {
        form:{
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            twitter:'',
        }
    }

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }

    render(){
        return(
            <div>
                <div className='BadgeNew__hero'>
                    <img className='img-fluid' src={header} alt='Logo'></img>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Badge  
                                firstName={this.state.form.firstName} 
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatar='https://s.gravatar.com/avatar/21e81fa2427e4f53870bd0d35176ed18?s=80'/>
                        </div>
                        <div className='col-6'>
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BadgeNew