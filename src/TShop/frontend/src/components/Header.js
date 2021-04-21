import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Container }from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container className="pt-3 pb-5">
            <div className=" h1 float-left">Online Store</div>
            <div className="py-3 float-right">
                <Link to="profile/" className="icon-link"><PersonIcon className="mx-1 btn-social"/></Link>
                <Link to="cart/" className="icon-link"><ShoppingCartIcon className="mx-1 btn-social"/></Link>
            </div>
        </Container>
    )
}

export default Header
