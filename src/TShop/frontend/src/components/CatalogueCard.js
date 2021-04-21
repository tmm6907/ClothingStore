import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg } from 'reactstrap';


const CatalogueCard = ({title}) => {
    return (
        <Card>
            <img width="100%" src="" alt="Card image cap" />
            <CardBody>
                <Link to="<slug>/"><CardImg top width="100%" src="" alt="Card image cap" /></Link>
                <Link to="<slug>/">
                    <CardTitle tag="h5">{title}</CardTitle>
                </Link>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            </CardBody>
        </Card>
    );
};

export default CatalogueCard
