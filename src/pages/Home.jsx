import React, { useState } from 'react';
import BackgroundShapes from "../components/BackgroundShapes.jsx";
import "../../public/stylesheets/home.css"
import Email from "../components/Email.jsx"


const Home = () => {


    return (
        <div>
            <BackgroundShapes />
            <div className="homepage-container">
                <div className="content">
                    <h1 className="name-title">ASHUTOSH CHIKHALIYA<span className="highlight-blue">.</span></h1>
                    <h2 className="sub-title highlight-blue">Web Developer</h2>
                    <Email />
                    {/* Contact box with dynamic button text and copied state */}
                </div>
            </div>
        </div>
    );
}

export default Home;
