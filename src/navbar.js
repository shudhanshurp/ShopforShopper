import React from "react";
import './navbar.css'
import { NavLink , useLocation } from "react-router-dom";
 
const Navbar = () =>{
    const location = useLocation();
    return(
        <div className='navbar'>
            <ul className='list'>
                <li><NavLink to='/'className={location.pathname === '/' ? 'active-link' : ''} >Home</NavLink></li>
                <li><NavLink to='/electronics' className={location.pathname === '/electronics' ? 'active-link' : ''} >Electronics</NavLink></li>
                <li><NavLink to='/jewelery' className={location.pathname === '/jewelery' ? 'active-link' : ''} >Jewelery</NavLink></li>
                <li><NavLink to='/clothingformen' className={location.pathname === '/clothingformen' ? 'active-link' : ''} >Men's clothing</NavLink></li>
                <li><NavLink to='/clothingforwomen' className={location.pathname === '/clothingforwomen' ? 'active-link' : ''} >Women's clothing</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;