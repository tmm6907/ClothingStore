import React from 'react';
import CardComp from './Card';
import ButtonComp from './Button';
import { Container } from 'reactstrap'
import CatalogueCard from './CatalogueCard'
import Footer from './Footer'
import Header from './Header'
import NavbarComp from './Navbar'

const About = () => {
    return (
        <Container>
            <Header />
            <NavbarComp />
            <CardComp btn_path="/" btn_title="Go back home" card_title="About Page" card_text="Some quick example text to build on the card title and make up the bulk of the card's content." />
            <Footer />
        </Container>
    )
}

export default About
