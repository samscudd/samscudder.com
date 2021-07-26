import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Jumbo() {
    

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container className="text-center" fluid={true}>
                <Row className="justify-content-md-center py-5">
                    <Col md={5} sm={12}>
                        <h2 className="mb-3">HELLO! My name is</h2>
                        <h1 className="mb-4">saM SCUdDeR</h1>             
                        <h3 className="d-none d-md-block mb-4" >And I Like</h3>
                        <h5 className="d-none d-md-block">RobOtics, TangIble MEdiA, UX ReSEarCh, prOduct DevEloPmenT, anD climbInG MouNtAinS sO I CaN sKi down them</h5>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
     
     
    )
    

}

export default Jumbo;