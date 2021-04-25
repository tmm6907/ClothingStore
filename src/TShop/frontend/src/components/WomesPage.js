import React from 'react'
import {Container, Row } from 'reactstrap'
import CatalogueCard from './CatalogueCard'
import Footer from './Footer'
import Header from './Header'
import NavbarComp from './Navbar'

const WomesPage = () => {
    return (
        <Container>
            <Header />
            <NavbarComp />
            <Row>
                <CatalogueCard title="Women's Page"/>
            </Row>
            <Footer />
        </Container>
    )
}

export default WomesPage
