import React  from "react";
// import { Link } from "react-router-dom";
import './login.css';
import logo from './pics/logo.png'
import './myaccount.css'

const MyAccount = () => {
    return(
        <>
        <div className='logo-div'><img src={logo} alt="logo" className='logo' /></div>
        <h1 className='my-account-title'>Welcome Name!</h1>
        <div className='line'></div>
        <main className='myaccount'>
        
            <div className='account-information'>
                <h2 className='account-info-title'>Your Information</h2>
                <label htmlFor="ac-name" className='account-label'>Name</label>
                <input type="text" name="ac-name" className="account-value" />
                <label htmlFor="ac-email" className='account-label'>Email</label>
                <input type="email" name='ac-email' className='account-value'/>
                <label htmlFor="ac-mobile" className='account-label'>Mobile no.</label>
                <input type="tel" name="ac-mobile" className="account-value" />
            </div>
            <div className='account-information'>
                <h2 className='account-info-title'>Your Address</h2>
                <label htmlFor="ac-pin" className='account-label'>Pincode</label>
                <input type="text" name="ac-pin" className="account-value" />
                <label htmlFor="ac-flat" className='account-label'>Flat, House no, Building, Apartment, Company</label>
                <input type="text" name='ac-flat' className='account-value'/>
                <label htmlFor="ac-area" className='account-label'>Area, Street, Village</label>
                <input type="text" name="ac-area" className="account-value" />
                <label htmlFor="ac-lm" className='account-label'>Landmark</label>
                <input type="text" name='ac-lm' className='account-value'/>
                <label htmlFor="ac-city" className='account-label'>Town/City</label>
                <input type="text" name="ac-city" className="account-value" />
                <label htmlFor="ac-state" className='account-label'>State</label>
                <input type="text" name='ac-state' className='account-value'/>
                <label htmlFor="ac-country" className='account-label'>Country</label>
                <input type="text" name="ac-country" className="account-value" />
            </div>
            <div className='account-information'>
                <h2 className='account-info-title'>Your Wish List</h2>
            </div>
            <div className='account-information'>
                <h2 className='account-info-title'>Your Orders</h2>
            </div>
            <div className='account-address'>
                <button type='submit' className='account-btn'>Update information</button>
                <button type="reset" className='account-btn'>Clear all information</button>
            </div>
        </main>
        </>
        
    )
}

export default MyAccount