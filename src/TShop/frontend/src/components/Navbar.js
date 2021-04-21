import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
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
                        <NavItem className="mx-2">
                            <Link to="/" className="nav-link">Home</Link>
                        </NavItem>
                        <NavItem className="mx-2">
                            <Link to="/womens" className="nav-link">Womens</Link>
                        </NavItem>
                        <NavItem className="mx-2">
                            <Link to="/mens" className="nav-link">Mens</Link>
                        </NavItem>
                        <NavItem className="mx-2">
                            <Link to="/sale" className="nav-link">Sale</Link>
                        </NavItem>
                        <NavItem className="mx-2">
                            <Link to="/about" className="nav-link">About</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Switch>
                <Route exact path="/" />
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </Container>
    )
}

export default NavbarComp
