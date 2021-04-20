import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import { Container } from 'reactstrap';


const Footer = () => {
    return (
        <footer>
            <Container className="mt-5 mb-3">
                <a href="https://www.facebook.com" target="_blank">
                    <FacebookIcon  className="mx-1 btn-svg"/>  
                </a>
                <a href="https://www.instagram.com" target="_blank">
                    <InstagramIcon  className="mx-1 btn-svg"/>  
                </a>
                <a href="https://www.twitter.com" target="_blank">
                    <TwitterIcon  className="mx-1 btn-svg"/>  
                </a>
                <a href="email/" target="_blank">
                    <EmailIcon  className="mx-1 btn-svg"/>
                </a>
                <div className="float-right">© 2021 ONLINE STORE</div>
            </Container>
        </footer>
    )
}

export default Footer
