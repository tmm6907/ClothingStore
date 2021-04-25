import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody, CardTitle
  } from 'reactstrap';
import ButtonComp from './Button';


const CardComp = ({btn_title, card_text, card_title, btn_path}) => {
    return (
        <Card>
            <CardImg top width="100%" src="" alt="Card image cap" />
            <CardBody>
                <CardTitle>{card_title}</CardTitle>
                <CardText>{card_text}</CardText>
                <Link to={btn_path}><ButtonComp title={btn_title}></ButtonComp></Link>
            </CardBody>
        </Card>
    )
}

export default CardComp
