import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CatalogueCard from './CatalogueCard'
import Footer from './Footer'
import Header from './Header'
import NavbarComp from './Navbar'

const MensPage = () => {
    return (
        <Container>
            <Header />
            <NavbarComp />
            <Row>
                <CatalogueCard />
            </Row>

            <Footer />
        </Container>
    )
}

export default MensPage
