import React from 'react'
import {connect} from  'react-redux'
import {Link} from 'react-router-dom'
import {startLoginUser} from '../../actions/userAction'
import './Login.css'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
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
            email:this.state.email,
            password:this.state.password
        }
        const redirect=()=>{
            return this.props.history.push('/')
        }
        this.props.dispatch(startLoginUser(formData,redirect))
    }
    render() {
        return(
            <div className='login'>
                <span className="loginTitle">Login</span>
                <form onSubmit={this.handleSubmit} className="loginForm">
                <label htmlFor="email">email</label>
                <input type="email" className='loginInput' placeholder='Enter your email...'value={this.state.email}  name="email" onChange={this.handleChange}/><br/>

                <label htmlFor="password">password</label>
                <input type="password" className='loginInput' placeholder='Enter your password...' value={this.state.password}  name="password" onChange={this.handleChange}/><br/>

                <input type="submit"  className="loginButton" />
                </form>
              
            </div>
        )
    }
}

export default connect()(Login)