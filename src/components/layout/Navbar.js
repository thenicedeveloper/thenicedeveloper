import React from 'react'
import {Nav} from 'react-bootstrap';
import { NavLink } from "react-router-dom";

export default function Navbarc() {
    return (
        <React.Fragment>
            <h1 className="my-header text-center mt-4 text-cardinal"><b>The Nice Developer</b></h1>
            <Nav
            activeKey="/"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            className="justify-content-center"
        >
            <Nav.Item>
                <NavLink to="/" className="mx-2 font-weight-bold lead text-dark"> <b>Home</b> </NavLink>
            </Nav.Item>
            
            <Nav.Item className="lead">
                |
            </Nav.Item>
            
            <Nav.Item>
                <NavLink to="/about" className="mx-2 font-weight-bold lead text-dark"> <b>About</b> </NavLink>
            </Nav.Item>            
            
        </Nav>
        </React.Fragment>        
    )
}
