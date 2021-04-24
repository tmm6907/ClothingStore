import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <Container className="mt-5 mb-3">
                <Link to="https://www.facebook.com">
                    <FacebookIcon id="btn-svg" className="mx-1"/>  
                </Link>
                <Link to="https://www.instagram.com">
                    <InstagramIcon  id="btn-svg" className="mx-1"/>  
                </Link>
                <Link to="https://www.twitter.com">
                    <TwitterIcon  id="btn-svg" className="mx-1"/>  
                </Link>
                <Link to="email/">
                    <EmailIcon  id="btn-svg" className="mx-1"/>
                </Link>
                <div className="float-right">© 2021 ONLINE STORE</div>
            </Container>
        </footer>
    )
}

export default Footer
