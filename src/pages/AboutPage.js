import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LittleMan from '../images/LittleMan.png';

function AboutPage() {
    

    return(
            <Container>
                <Row className="text-center">
                <h1>I am SAm, saM i Am</h1>
                </Row>
                <Row className="align-middle inline">
                    <Col className="mx-auto pt-5" md={5}>
                        <p>My name is Sam Scudder, and I'm a retired ski bum who now works in tech.  More specifically, I enjoy playing with robots and working alongside multidisciplinary teams to bring unique technical products to life.</p>
                    </Col>
                    <Col md={7}>
                        <img className="little-man" src={LittleMan} style={{height: 750}}></img>
                    </Col>
                </Row>
               
            </Container>
    )
    

}

export default AboutPage;