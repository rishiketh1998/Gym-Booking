import React from "react";

/**
 * @author Rishi
 * @description: it displays a banner with the company name along with a loading icon.
 * @returns {*}
 * @constructor
 */
export const Banner = () => {
    return(
        <div className='banner-box animate__animated animate__fadeOut animate__delay-3s text-center' data-testid='displaying-banner'>
            <h1 className='display-3 text-light' data-testid='banner-name'>Welcome to Digital Gym</h1>
            <i className="fas fa-dumbbell display-3 mt-1 animate__animated animate__flash"
               style={{color: 'chocolate'}}/>
        </div>
    )
}