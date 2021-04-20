import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container
  } from 'reactstrap';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Container>
            <Navbar style={{backgroundColor:"white"}} light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto" navbar>
                        <NavItem>
                            <NavLink href="/"> Home </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/womens"> Womens </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/mens"> Mens </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/sale"> Sale </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about"> About Us </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    )
}

export default NavbarComp
