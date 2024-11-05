import React, { useRef } from 'react';
import BackgroundShapes from "../components/BackgroundShapes.jsx";
import "../stylesheets/home.css";
import Email from "../components/Email.jsx";
import "../stylesheets/home.css";

const Home = () => {
    const tiltRef = useRef(null);

    const mouseMoving = (e) => {
        // Get the bounding rectangle of the tiltRef div
        const rect = tiltRef.current.getBoundingClientRect();

        // Calculate the center of the div
        const divCenterX = rect.x + rect.width / 2;
        const divCenterY = rect.y + rect.height / 2;

        // Calculate the deviation from the center of the div
        const offsetX = (e.clientX - divCenterX) / 10; // Adjust for smoother translation
        const offsetY = (e.clientY - divCenterY) / 10;

        // Calculate rotation angles for tilt effect
        const rotateX = (e.clientY - divCenterY) / 25; // Rotation around X-axis
        const rotateY = -(e.clientX - divCenterX) / 25; // Rotation around Y-axis

        // Apply both translate and rotate transforms
        tiltRef.current.style.transform = `
            translate(${offsetX}px, ${offsetY}px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg)
        `;
    };

    return (
        <div onMouseMove={mouseMoving} className='relative h-screen'>
            <BackgroundShapes />
            <div className="homepage-container flex flex-col justify-center items-center h-screen text-center my-0 mx-auto ">
                <div className="content flex flex-col items-center mt-44">
                    <h1 className="name-title text-7xl font-bold tracking-wide">
                        ASHUTOSH CHIKHALIYA<span className="highlight-blue">.</span>
                    </h1>
                    <div
                        ref={tiltRef}
                        className='absolute -z-10 top-36 rounded-2xl profile-card flex justify-between flex-col items-center'>
                        <img src="../src/assets/Untitled.jpg" width={"30%"} className='rounded-xl shadow-slate-800 shadow-2xl' />
                    </div>
                    <h2 className="sub-title mt-3 highlight-blue text-4xl">Web Developer</h2>
                    <Email />
                </div>
            </div>
        </div>
    );
};

export default Home;
