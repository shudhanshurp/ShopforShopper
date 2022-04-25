import React from "react";
import { Link } from "react-router-dom";
import './login.css';
import logo from './pics/logo.png'

const NewUser = () => {
    return(
        <>
        <div className='logo-div'><img src={logo} alt="logo" className='logo' /></div>
        <div className="login-format">
            <h1 className='signin-title'>Create new account</h1>
            <div className='main-input'>
                <label htmlFor="name-signin" className='label-signin'>Your name</label>
                <input type="text" name="name-signin" className="input-signin" />
                <label htmlFor="email-signin" className='label-signin'>Email</label>
                <input type="email" name='email-signin' className='input-signin'/>
                <label htmlFor="password-signin" className='label-signin'>Password</label>
                <input type="password" name='password-signin' className='input-signin'/>
                <label htmlFor="again-password-signin" className='label-signin'>Password again</label>
                <input type="password" name='again-password-signin' className='input-signin'/>
                <input type="submit" value='continue' id='continue-btn'/>
            </div>
            <div className='already-account'>
                <p>Already have an account? </p><Link to='/login' className='new-account-btn'>Sign-in</Link>
            </div>
        </div>
        </>
    )
}

export default NewUser;