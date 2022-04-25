import React from "react";
import './footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
    return(
        <div className='footer'>
            <div className='footer-layout'>
                <div className='foot-linker'><h3>Categories</h3>
                <ul className='footer-links'>
                <li><Link className='foot-links' to="/electronics">Electronics</Link></li>
                <li><Link className='foot-links' to="/jewelery">Jewelery</Link></li>
                <li><Link className='foot-links' to="/clothingformen">Men's clothing</Link></li>
                <li><Link className='foot-links' to="/clothingforwomen">Women's clothing</Link></li>
                </ul>
            </div>
            <div className='foot-linker'>
            <h3>My Account</h3>
                <ul className='footer-links'>
                    <li><a className='foot-links' href="1">My Address</a></li>
                    <li><a className='foot-links' href="1">My Wishlist</a></li>
                    <li><a className='foot-links' href="1">My Orders</a></li>
                </ul>
            </div>

            </div>
            <ul className='links'>
                <li><a href="1"><i className="fa fa-github"></i></a></li>
                <li><a href="1"><i className='fa fa-linkedin-square'></i></a></li>
            </ul>
        </div>
    )
}

export default Footer;