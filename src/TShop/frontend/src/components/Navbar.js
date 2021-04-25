import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Container
  } from 'reactstrap';


const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Container>
            <Navbar expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse className="mr-auto" isOpen={isOpen} navbar>
                    <Nav className="mx-auto" navbar>
                        <NavItem className="mx-2 h5">
                            <Link to="/" id="nav-link">Home</Link>
                        </NavItem>
                        <NavItem className="mx-2 h5">
                            <Link to="/womens" id="nav-link">Womens</Link>
                        </NavItem>
                        <NavItem className="mx-2 h5">
                            <Link to="/mens" id="nav-link">Mens</Link>
                        </NavItem>
                        <NavItem className="mx-2 h5">
                            <Link to="/sale" id="nav-link">Sale</Link>
                        </NavItem>
                        <NavItem className="mx-2 h5">
                            <Link to="/about" id="nav-link">About</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    )
}

export default NavbarComp
