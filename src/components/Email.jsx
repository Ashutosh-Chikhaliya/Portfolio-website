import React, { useState } from 'react'
import "../../public/stylesheets/home.css"

const Email = () => {
    const [copied, setCopied] = useState(false);

    function copyToClipboard() {

        const email = "ashutosh.chikhaliya@example.com";

        // Create a temporary input element to copy the text
        const tempInput = document.createElement("input");
        document.body.appendChild(tempInput);
        tempInput.value = email;
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        // Change the button and background to green and show "Copied" message
        setCopied(true);

        // Reset the button and background color after 2 seconds
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
    return (
        <div className={`contact-box ${copied ? 'copied' : ''} relative inline-block p-5 truncate cursor-pointer mt-4`} onClick={copyToClipboard}>
            <span className="text z-0 relative"> <span>📧  |  </span>  ashutoshchikhaliya@gmail.com</span>
            <button className="copy opacity-0 absolute text-white z-10 text-xl">{copied ? 'Copied!' : 'Copy'}</button>
        </div>
    )
}

export default Email
