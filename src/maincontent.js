import React from 'react';
import Slider from './ad';
import Tranding from './tranding.js'
import Picked from './picked.js'
import Header from './header';
import Navbar from './navbar';
import Footer from './footer'

const MainContent = () =>{
    return(
        <div>
            <Header />
            <Navbar />
            <Slider />
            <Tranding />
            <Picked />
            <Footer />
        </div>
    )
}

export default MainContent;