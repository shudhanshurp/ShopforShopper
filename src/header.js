import logo from './pics/logo.png'
import React from "react";
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="header">
            <img src={logo} alt="logo" className="logo" />
            <div className="form">
            <input type="search" />
            <button type='submit'><i className='fa fa-search'></i></button>
            </div>
            <div className="btn">
            <button className="account main-btn">
                <Link className='account-link' to="/myaccount"><i className="fa fa-user"></i></Link>
            </button>
            <button className='cart main-btn'>
            <Link className='cart-link' to="/mycart"><i className='fa fa-shopping-cart'></i></Link></button>
            </div>
        </div>
    )
}

export default Header;