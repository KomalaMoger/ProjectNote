import React from 'react'
import {connect} from  'react-redux'
import {Link} from 'react-router-dom'
import {startRegisterUser} from '../../actions/userAction'
import './Register.css'
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            email:'',
            password:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        const redirect=()=>{
            return this.props.history.push('/users/login')
        }
        this.props.dispatch(startRegisterUser(formData,redirect))
        // this.props.dispatch(startRegisterUser(formData,this.props))
    }
    render(){
        return(
            <div  className='register'>
                <span className="registerTitle">Register</span>
                <form onSubmit={this.handleSubmit} className="registerForm">
                <label htmlFor="username">username</label>
                <input  type="text" className='registerInput' placeholder='Enter your username...' value={this.state.username} name="username"onChange={this.handleChange}/><br/>

                <label htmlFor="email">email</label>
                <input type="email" className='registerInput' placeholder='Enter your email...'  value={this.state.email}  name="email" onChange={this.handleChange} /><br/>

                <label htmlFor="password">password</label>
                <input type="password" className='registerInput' placeholder='Enter your password...' value={this.state.password}  name="password" onChange={this.handleChange} /><br/>

                <input type="submit" className="registerButton" />
                </form>
               
            </div>
        )
    }
}
export default connect()(Register)