import React from "react";
import './Home.css'

/**
 * @author Rishi
 * @description: it displays a banner with the company name along with a loading symbol.
 * @param display
 * @returns {*}
 * @constructor
 */
export const Banner = ({display}) => {
    //HTML for the BANNER component
    const bannerHTML = <div className='banner-box animate__animated animate__fadeOut animate__delay-3s'>
                            <h1 className='display-3 text-light' data-testid='banner-name'>Digital Gym</h1>
                            <i className="fas fa-dumbbell display-3 mt-1 animate__animated animate__flash"
                               style={{color: 'chocolate'}}/>
                        </div>
    /**
     * @Author Rishi
     * @description: if display is set to true then it returns the banner html else it returns an empty string
     * @returns {string|*}
     */
    const displayBanner = display =>  display ? bannerHTML : ''
    return(
       <div data-testid={display ? 'displaying' : 'not-displaying'}>
           {displayBanner(display)}
       </div>
    )
}