import React from "react";
import {Card} from "react-bootstrap";

export const GymImage = ({images}) => {
    const {Home} = images
    return (
        <Card>
            <img src={Home} alt="Home"/>
        </Card>
    )
}