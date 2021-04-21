import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Container }from 'reactstrap';
import Cart from './Cart';
import Profile from './Profile';


import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const Header = () => {
    return (
        <BrowserRouter>
            <Container className="pt-3 pb-5">
                <div className=" h1 float-left">Online Store</div>
                <div className="py-3 float-right">
                    <Link to="/profile" className="icon-link"><PersonIcon className="mx-1 btn-social"/></Link>
                    <Link to="/cart" className="icon-link"><ShoppingCartIcon className="mx-1 btn-social"/></Link>
                </div>
                <Switch>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/Cart">
                        <Cart />
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default Header
