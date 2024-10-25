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
        setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 40)
        setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().width / 2) / 50)

        tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`
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
