import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
    const {serviceId}= useParams()
    return (
        <div>
            <h1>Details-{serviceId} </h1>
        </div>
    );
};

export default DetailsPage;
