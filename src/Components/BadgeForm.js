import React from 'react'

class BadgeForm extends React.Component{
    state = {
        jobTitle:'Designer'
    }
    handleChange = (e) =>{
        // console.log({
        //     value:e.target.value,
        //     name:e.target.name
        // })
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) =>{
        console.log('Button was clicked');
    }

    HandleSubmit = e =>{
        e.preventDefault()
        console.log(this.state);
        
    }

    render(){
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.HandleSubmit}>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input 
                            onChange={this.handleChange} 
                            className='form-control' 
                            type='text' 
                            name='firstName'
                            value={this.state.firstName}></input>
                    </div>
                    
                    <div className='form-group'>
                        <label>Email</label>
                        <input 
                            onChange={this.handleChange} 
                            className='form-control' 
                            type='email' 
                            name='email'
                            value={this.state.email}></input>
                    </div>
                    
                    <div className='form-group'>
                        <label>Job Title</label>
                        <input 
                            onChange={this.handleChange} 
                            className='form-control' 
                            type='text' 
                            name='jobTitle'
                            value={this.state.jobTitle}></input>
                    </div>
                    
                    <div className='form-group'>
                        <label>Twitter</label>
                        <input 
                            onChange={this.handleChange} 
                            className='form-control' 
                            type='text' 
                            name='twitter'
                            value={this.state.twitter}></input>
                    </div>

                    <button className='btn btn-primary' onClick={this.handleClick}>Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm