import React from 'react'
//Bootstrap And react-bootstrap
import {Row, Col, Card} from 'react-bootstrap';

export default function Main() {
    return (
        <Row className="m-2 no-gutters mb-4">
          <Col className="mx-auto" md="6">      
            <Card className="main_card">
              <Card.Img variant="top" src="clifton_meetup.jpeg">

              </Card.Img>
              <Card.Body className="main_card_body">
                <p>
                This channel is for those interested in Web Development. 
                We will build websites, and work on projects using on demand technology like React and Nodejs. 
                We will use the AWS Cloud computing platform to build most of our apps. All you need is your motivation!
                </p> 

                <div className="lead">Join our Meetup Group in Clifton, NJ: 
                  <p 
                    className="pt-3 mb-0 font-weight-bold">
                      <a 
                        className="text-dark" 
                        href="https://www.meetup.com/Clifton-and-Northern-NJ-Web-Development-Meetup-Group/" target="_blank" rel="noopener noreferrer"> 
                          <u>Meetup Group</u>
                      </a>
                  </p>
                </div>   

                <div className="lead">You can also find us on social media: 
                  <p className="pt-3 mb-0 font-weight-bold"><a className="text-dark" href="https://www.instagram.com/thenicedeveloper/" target="_blank" rel="noopener noreferrer"> <u>Instagram</u> </a></p>
                  <p className="pt-0 font-weight-bold"><a href="https://www.facebook.com/thenicedeveloper/" target="_blank" rel="noopener noreferrer"> <u>Facebook</u> </a></p>
                </div> 
                <hr/>                           
              </Card.Body>
            </Card>
          </Col>
        </Row>
    )
}
