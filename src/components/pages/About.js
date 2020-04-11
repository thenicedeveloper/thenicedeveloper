import React from 'react'
import {Row, Col} from 'react-bootstrap';

export default function About() {
    return (
        <React.Fragment>
            <p 
                className="text-muted" 
                style={{fontSize:"1.4em"}}>
                    Simple....<br />
                    We write code and network.<br /> 
                    <a 
                        className="text-dark"
                        href="https://www.meetup.com/Clifton-and-Northern-NJ-Web-Development-Meetup-Group/events/"                        
                    >
                        <u>Join our meetups</u>!
                    </a>
            </p>
            <Row className="d-flex justify-content-center mt-4">
                <Col className="" sm="4">
                        <img className="img-thumbnail" src="developers1.jpeg" alt="Card image cap"></img>
                </Col>
                <Col className="" sm="4"> 
                    <div className="">
                        <img className="img-thumbnail" src="developers2.jpeg" alt="Card image cap"></img>             
                    </div>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center mt-4">
                <Col className="" sm="4">
                    <img className="img-thumbnail" src="developers3.jpeg" alt="Card image cap"></img> 
                </Col>
            </Row>
        </React.Fragment>
        
                
    )
}
