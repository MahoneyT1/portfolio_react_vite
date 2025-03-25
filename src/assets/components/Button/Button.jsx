import React from "react";
import { useState } from "react";
import "./Button.css"

const Button = ({ btnName, color, textColor="white", onClick })=> {

    const [chClick, setchClick] = useState(true)

    const handleClick = (e)=> {
        e.preventDefault();
        setchClick(!chClick);

        // if onClick props
        if (onClick) {
            onClick(e);
        };
    };
    
    return (
        <button className={`btn fs-6 fw-normal  
            rounded-3 btn-custom-hover border border-1 btn btn-${
                chClick ? "primary" : 
                color} text-${textColor}`}

            // handle when the botton is clicked
            onClick={handleClick}
            >
           <small>{btnName}</small>
           
        </button>
    );
};
export default Button;