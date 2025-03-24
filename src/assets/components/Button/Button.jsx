import React from "react";
import { useState } from "react";
import "./Button.css"

const Button = ({ btnName, color, textColor="white"})=> {

    const [chClick, setchClick] = useState(true)

    const handleClick = (e)=> {
        e.preventDefault();


        setchClick(!chClick)
        return 
    }
    

    return (
        <button className={`btn fs-6 fw-normal  
            rounded-3 btn-custom-hover border border-1 btn btn-${
                chClick ? "primary" : 
                color} text-${textColor}`}

            // handle when the botton is clicked
            onClick={handleClick}
            // onMouseEnter={(e)=> e.target.classList.add("btn-warning")}
            // onMouseOut={(e)=> e.target.classList.remove("btn-warning")}
        
            >
           <small>{btnName}</small> 
        </button>
    )
}

export default Button;