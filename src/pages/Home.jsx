import React, { useState } from 'react';
import BackgroundShapes from "../components/BackgroundShapes.jsx";
import "../stylesheets/home.css"
import Email from "../components/Email.jsx"


const Home = () => {


    return (
        <div>
            <BackgroundShapes />
            <div className="homepage-container flex justify-center items-center h-screen text-center my-0 mx-auto">
                <div className="content flex flex-col justify-center items-center p-5">
                    <h1 className="name-title text-7xl font-bold tracking-wide">ASHUTOSH CHIKHALIYA<span className="highlight-blue">.</span></h1>
                    <h2 className="sub-title mt-2 highlight-blue text-4xl">Web Developer</h2>
                    <Email />
                </div>
            </div>
        </div>
    );
}

export default Home;
