import React from 'react';
import { Jumbotron } from 'reactstrap';
import ButtonComp from './Button';

const JumbotronComp = ({btn_title, btn_path}) => {
    return (
        <Jumbotron>
            <h1 className="display-3">Welcome to Online Store!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
            <a href={btn_path}><ButtonComp title={btn_title}></ButtonComp></a>
            </p>
        </Jumbotron>
    )
}

export default JumbotronComp
