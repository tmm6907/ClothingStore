import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Container }from 'reactstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Container className="pt-3 pb-5">
            <Link to="/"><div style={{color:'black'}} className="h1 float-left">Online Store</div></Link>
            <div className="py-3 float-right">
                <Link to="/profile"><PersonIcon id="btn-svg" className="mx-1"/></Link>
                <Link to="/cart"><ShoppingCartIcon id="btn-svg" className="mx-1"/></Link>
            </div>
        </Container>
    )
}

export default Header
