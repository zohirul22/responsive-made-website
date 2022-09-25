import React from 'react';
import './Expert.css'

const Expert = ({expert}) => {
    const {name ,img } = expert;
    return (
        <div className="card col-sm-12 col-md-6 col-lg-4 gx-3" >
        <img className='img-side' src={img}  alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         
        </div>
      </div>
    );
};

export default Expert;