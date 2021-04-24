import React, { useState } from 'react';
import About from './About';
import WomensPage from './WomesPage';
import MensPage from './MensPage';
import SalePage from './SalePage';

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
        <BrowserRouter>
            <Container>
                <Navbar expand="md">
                    <NavbarToggler onClick={toggle} />
                    <Collapse className="mr-auto" isOpen={isOpen} navbar>
                        <Nav className="mx-auto" navbar>
                            <NavItem className="mx-2">
                                <a href="/" id="nav-link">Home</a>
                            </NavItem>
                            <NavItem className="mx-2">
                                <a href="/womens" id="nav-link">Womens</a>
                            </NavItem>
                            <NavItem className="mx-2">
                                <a href="/mens" id="nav-link">Mens</a>
                            </NavItem>
                            <NavItem className="mx-2">
                                <a href="/sale" id="nav-link">Sale</a>
                            </NavItem>
                            <NavItem className="mx-2">
                                <a href="/about" id="nav-link">About</a>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Switch>
                    <Route exact path="/" />
                    <Route path="/womens" component={WomensPage} />
                    <Route path="/mens" component={MensPage} />
                    <Route path="/sale" component={SalePage} />
                    <Route path="/about" component={About} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default NavbarComp
