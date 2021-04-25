import React from 'react'
import { Container, Row } from 'reactstrap'

import Footer from './Footer'
import Header from './Header'
import NavbarComp from './Navbar'

const Profile = () => {
    return (
        <Container>
            <Header />
            <NavbarComp />
            <Row>
                <p className="h1">Profile Page</p>
            </Row>
            <Footer />
        </Container>
    )
}

export default Profile
