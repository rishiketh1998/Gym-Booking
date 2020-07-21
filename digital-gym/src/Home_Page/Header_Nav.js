import React from "react";
import logo from '../Images/digital-gym-logo.png';

export const Header_Nav = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand h1" href="#">
                <img src={logo} className="d-inline-block align-top" alt=""/>
            </a>
        </nav>
    )
}