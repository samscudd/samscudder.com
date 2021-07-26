import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Jumbo from '../components/Jumbo';
import ProjectGrid from '../components/ProjectGrid';
import {ReactComponent as PinkBlob} from '../blobs/blob1.svg';

function HomePage() {
    

    return(

        
        <Container fluid={true}>
            <Jumbo />
            <ProjectGrid />
        </Container>
    )
    

}

export default HomePage;