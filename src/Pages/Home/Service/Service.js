import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const {id, name, img } = service;
    const navigate = useNavigate();

    const handelAddToCart =(id)=>{
        // navigate(`/service/${id}`)
        navigate(`/service/${id}`)
    }

    return (
        <div className='service'>
            <img className='img-side' src={img} alt="" />
            <h2>{name}</h2>
            <button onClick={()=>handelAddToCart(id)}>{name}</button>
        </div>
    );
};

export default Service;