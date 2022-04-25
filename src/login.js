import React from "react";
import { Link } from "react-router-dom";
import './login.css';
import logo from './pics/logo.png'

const Login = () => {
    return(
        <>
        <div className='logo-div'><img src={logo} alt="logo" className='logo' /></div>
        <div className="login-format">
            <h1 className='signin-title'>Sign-in</h1>
            <div className='main-input'>
                <label htmlFor="email-signin" className='label-signin'>Enter your Email</label>
                <input type="email" name="email-signin" className="input-signin" />
                <label htmlFor="password-signin" className='label-signin'>Password</label>
                <input type="password" name='password-signin' className='input-signin'/>
                <input type="submit" value='continue' id='continue-btn'/>
            </div>
            <div className='new-account'>
                <Link to='/newuser' className='new-account-btn'>Create new account</Link>
            </div>
        </div>
        </>
    )
}

export default Login;