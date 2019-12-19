import React from 'react'
import {Nav} from 'react-bootstrap';
import { NavLink } from "react-router-dom";

export default function Navbarc() {
    return (
        <React.Fragment>
            <h1 className="display-4 text-center mt-4">The Nice Developer</h1>
            <Nav
            activeKey="/"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            className="justify-content-center"
        >
            <Nav.Item>
                <NavLink to="/" className="m-2 lead text-info"> <b>Home</b> </NavLink>
            </Nav.Item>
            
            <Nav.Item className="lead">
                |
            </Nav.Item>
            
            <Nav.Item>
                <NavLink to="/about" className="m-2 lead text-info"> <b>About</b> </NavLink>
            </Nav.Item>            
            
        </Nav>
        </React.Fragment>        
    )
}
