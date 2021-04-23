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
