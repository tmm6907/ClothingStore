import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Header from './Header';
import NavbarComp from './Navbar';
import JumbotronComp from './Jumbotron';
import CardComp from './Card';
import Footer from './Footer';

const HomePage = () => {
    return (
        <Container>
            <Header />
            <NavbarComp />
            <JumbotronComp btn_path="/womens" btn_title="Shop Women's" />
            <Row>
            <Col className="col-4">
                <CardComp btn_title="Men's" btn_path="/mens" card_text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            </Col>
            <Col className="col-4">
                <CardComp btn_title="Sales" btn_path="/sale" card_text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            </Col>
            <Col className="col-4">
                <CardComp btn_title="Accessories" btn_path="/accessories" card_text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            </Col>
            </Row>
            <Footer />
        </Container>
    )
}

export default HomePage
