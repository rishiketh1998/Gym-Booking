import React from "react";

export const HomeVideo = () => {
    return (
        <div className='row m-0'>
            <div className='col-xl-4 col-md-12'>
                <div className="embed-responsive embed-responsive-16by9 updateHover">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xZs6nCUQuuM?autoplay=1&rel=0&loop=1&mute=1&controls=0&showinfo=0&modestbranding=0&loop=1&playsinline=1" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    title='Digital-Gym-Video'
                    allowFullScreen/>
                </div>
            </div>
        </div>
    )
}