import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import NavbarComp from './components/Navbar';
import JumbotronComp from './components/Jumbotron';
import CardComp from './components/Card';
import Footer from './components/Footer';


import { Container, Row, Col } from 'reactstrap';
import { render } from 'react-dom';

const App = () => {
  return (
    <Container className="body mx-auto">
      <Header />
      <NavbarComp />
      <JumbotronComp />
      <Row>
        <Col className="col-4">
          <CardComp btn_title="Men's"  card_text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </Col>
        <Col className="col-4">
          <CardComp btn_title="Sales"  card_text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </Col>
        <Col className="col-4">
          <CardComp btn_title="Accessories"  card_text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
        </Col>
      </Row>
      <Footer />
    </Container>
  )
}

const appDiv = document.getElementById('root');
render(<App />, appDiv);

