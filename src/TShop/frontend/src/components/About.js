import React from 'react';
import CardComp from './Card';
import ButtonComp from './Button';
import { Container } from 'reactstrap';

const About = () => {
    return (
        <Container>
            <CardComp card_title="About Page" card_text="Some quick example text to build on the card title and make up the bulk of the card's content." />
            <ButtonComp title="Go" />
        </Container>
    )
}

export default About
