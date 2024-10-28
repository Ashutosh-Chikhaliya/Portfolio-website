import React, { useRef, useState } from 'react';
import BackgroundShapes from "../components/BackgroundShapes.jsx";
import "../stylesheets/home.css"
import Email from "../components/Email.jsx"
import "../stylesheets/home.css"


const Home = () => {

    const tiltRef = useRef(null)
    const [xVal, setXVal] = useState(0);
    const [yVal, setYVal] = useState(0);

    const mouseMoving = (e) => {
        // Get the bounding rectangle of the tiltRef div
        const rect = tiltRef.current.getBoundingClientRect();

        // Calculate the center of the div
        const divCenterX = rect.x + rect.width / 2;
        const divCenterY = rect.y + rect.height / 2;

        // Calculate the deviation from the center of the div
        const offsetX = e.clientX - divCenterX;
        const offsetY = e.clientY - divCenterY;

        // Adjust values for smoother or more dramatic effect
        setXVal(offsetX / 50);
        setYVal(-offsetY / 20);

        // Apply transform based on the calculated values
        tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
    }

    return (
        <div onMouseMove={(e) => {
            mouseMoving(e)
        }} className='relative h-screen' >
            <BackgroundShapes />
            <div id='perpective' className="homepage-container flex flex-col justify-center items-center h-screen text-center my-0 mx-auto">
                <div ref={tiltRef} id='tiltDiv' className="content flex flex-col justify-center items-center p-5">
                    <h1 className="name-title text-7xl font-bold tracking-wide">ASHUTOSH CHIKHALIYA<span className="highlight-blue">.</span></h1>
                    <h2 className="sub-title mt-2 highlight-blue text-4xl">Web Developer</h2>
                    <Email />
                </div>
            </div>
        </div>
    );
}

export default Home;
