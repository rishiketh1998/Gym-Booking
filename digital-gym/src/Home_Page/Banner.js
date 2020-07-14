import React from "react";
import './Home.css'

export const Banner = () => {
    //animate__animated animate__zoomOutDown animate__delay-4s
    return(
        <div className='banner-box animate__animated animate__fadeOut animate__delay-3s'>
           <h1 className='display-3 text-light '> Digital Gym</h1>
           <i className="fas fa-dumbbell display-3 mt-1 animate__animated animate__flash" style={{color: 'chocolate'}}/>
        </div>
    )
}