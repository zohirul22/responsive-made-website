import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img } = service;
    return (
        <div className='service '>
            <img className='img-side' src={img} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Service;