import React from "react";
import {Jumbotron} from "react-bootstrap";
import {BannerNote} from "./BannerNote";

export const Banner = () => {
    return (
            <Jumbotron className='my-3' style={{backgroundColor:'#0d0e10f0'}}>
                <h1 className='display-4 text-info'>Digital Gym</h1>
                <BannerNote />
            </Jumbotron>
    )
}

