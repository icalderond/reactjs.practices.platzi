import React from 'react'

class BadgeForm extends React.Component{

    handleChange = (e) =>{
        console.log({
            value:e.target.value,
            name:e.target.name
        })
    }

    handleClick = (e) =>{
        console.log('Button was clicked');
    }

    HandleSubmit = e =>{
        e.preventDefault()
    }

    render(){
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.HandleSubmit}>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input onChange={this.handleChange} className='form-control' type='text' name='firstName'></input>
                    </div>

                    <button className='btn btn-primary' onClick={this.handleClick}>Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm