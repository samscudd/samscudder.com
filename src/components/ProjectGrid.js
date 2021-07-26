import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import FreshorFishy from '../images/FreshorFishy.png';
import DesignLab from '../images/DesignLab.png';
import MorimotoLab from '../images/MorimotoLab.png';
import FoodPantry from '../images/FoodPantry.png';
import HCRLab from '../images/HCRLab.png';
import KRG from '../images/krg.png'


class ProjectGrid extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Fresh or Fishy',
                    subtitle: 'Using modern technology to combat Illegal, Unregulated, and Unreported fishing.',
                    imgSrc: FreshorFishy,
                    selected: false

                },
                {
                    id: 1,
                    title: 'The Design Lab',
                    subtitle: 'Researching developer tools to make navigating complex libraries simple.',
                    imgSrc: DesignLab,
                    selected: false

                },
                {
                    id: 2,
                    title: 'Kastner Research Group',
                    subtitle: 'Using autonomous robotics algorithms to explore Mayan ruins.',
                    imgSrc: KRG,
                    selected: false

                },
                {
                    id: 3,
                    title: 'Morimoto Lab',
                    subtitle: 'Testing themral and vibrotactile interfaces on the inner forearm.',
                    imgSrc: MorimotoLab,
                    selected: false
                },
                {
                    id: 4,
                    title: 'Healthcare Robotics Lab',
                    subtitle: 'How do humans respond to a mobile hand sanitation station?',
                    imgSrc: HCRLab,
                    selected: false
                },
                {
                    id: 5,
                    title: 'Triton Food Pantry',
                    subtitle: 'Lowering the risk of visiting the food pantry through inventory transpary',
                    imgSrc: FoodPantry,
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
     

}

export default ProjectGrid;