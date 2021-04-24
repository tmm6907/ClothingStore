import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Container }from 'reactstrap';
import Cart from './Cart';
import Profile from './Profile';


import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black'
  };

const Header = () => {
    return (
        <BrowserRouter>
            <Container className="pt-3 pb-5">
                <div className=" h1 float-left">Online Store</div>
                <div className="py-3 float-right">
                    <a href="/profile"><PersonIcon id="btn-svg"/></a>
                    <a href="/cart"><ShoppingCartIcon id="btn-svg"/></a>
                </div>
                <Switch>
                    <Route path="/profile" component={Profile} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default Header
