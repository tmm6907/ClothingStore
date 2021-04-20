import React from 'react';
import {
    Card, CardImg, CardText, CardBody
  } from 'reactstrap';
import ButtonComp from './Button';


const CardComp = ({btn_title, card_text}) => {
    return (
        <Card>
            <CardImg top width="100%" src="" alt="Card image cap" />
            <CardBody>
                <CardText>{card_text}</CardText>
                <ButtonComp title={btn_title}></ButtonComp>
            </CardBody>
        </Card>
    )
}

export default CardComp
