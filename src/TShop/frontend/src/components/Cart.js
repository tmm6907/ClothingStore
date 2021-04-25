import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CatalogueCard from './CatalogueCard'
import Footer from './Footer'
import Header from './Header'
import NavbarComp from './Navbar'

const Cart = () => {
    return (
        <Container>
            <Header />
            <NavbarComp />
            <Row>
                <p className="h1">Cart Page</p>
            </Row>
            <Footer />
        </Container>
    )
}

export default Cart
