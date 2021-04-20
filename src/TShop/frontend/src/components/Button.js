import React from 'react';
import { Button } from 'reactstrap';

const ButtonComp = ({title}) => {
    return (
        <Button style={{ backgroundColor:"black" }}> {title}</Button>
    )
}

export default ButtonComp
