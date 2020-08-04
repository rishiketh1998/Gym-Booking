import React from "react";
import {Navbar, Nav} from "react-bootstrap";

export const Header = () => {
    return (
        <Navbar expand="lg" fixed="top" style={{backgroundColor:'#212529'}} className='position-relative' variant="dark">
            <Navbar.Brand href="#home" className='ml-2 text-info' style={{fontSize: 'x-large'}}>
                Digital Gym
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto ml-1">
                    <Nav.Link  href="#home" className='ml-4 text-secondary' style={{fontSize:'initial'}}>
                        <i className="fas fa-home mr-1"/>
                        Home
                    </Nav.Link>
                    <Nav.Link href="#link" className='ml-4 text-secondary' style={{fontSize:'initial'}}>
                        <i className="fas fa-female mr-1" />
                        Queue-Up
                    </Nav.Link>
                    <Nav.Link href="#link" className='ml-4 text-secondary' style={{fontSize:'initial'}}>
                        <i className="fas fa-dumbbell mr-1"/>
                        Workout Plans
                    </Nav.Link>
                    <Nav.Link variant="tabs" href="#home" className='ml-4 text-secondary' style={{fontSize:'initial'}}>
                        <i className="fas fa-map-signs mr-1"/>
                        Locations
                    </Nav.Link>
                    <Nav.Link variant="tabs" href="#home" className='ml-4 text-secondary' style={{fontSize:'initial'}}>
                        <i className="fas fa-address-book mr-1"/>
                        Contact
                    </Nav.Link>
                </Nav>
                <Nav inline="true" className='mr-2'>
                    <Nav.Link variant="tabs" href="#home" className='ml-4 pl-2 text-light' >
                        <i className="fas fa-sign-in-alt mr-3"/>
                        Log In
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}