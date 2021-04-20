import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Container }from 'reactstrap';

const Header = () => {
    return (
        <Container className="pt-3 pb-5">
            <div className=" h1 float-left">Online Store</div>
            <div className="py-3 float-right">
                <PersonIcon className="mx-1 btn-social"/>
                <ShoppingCartIcon className="mx-1 btn-social"/>
            </div>
        </Container>
    )
}

export default Header
