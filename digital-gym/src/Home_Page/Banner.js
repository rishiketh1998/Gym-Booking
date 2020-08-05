import React from "react";
import {Jumbotron} from "react-bootstrap";
import {BannerNote} from "./BannerNote";

export const Banner = ({quote}) => {
    return (
            <Jumbotron className='my-3' style={{backgroundColor:'rgb(33, 37, 41)'}}>
                <h1 className='display-4 text-info'>Digital Gym</h1>
                <BannerNote quote={quote}/>
            </Jumbotron>
    )
}

