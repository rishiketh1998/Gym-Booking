import React from "react";

export const HomeVideo = ({video}) => {
    const {gymSharkVideo} = video
    return (
        <div className="embed-responsive embed-responsive-16by9 updateHover">
            <iframe width="560" height="315" src={gymSharkVideo} frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title='Digital-Gym-Video'
            allowFullScreen/>
        </div>
    )
}