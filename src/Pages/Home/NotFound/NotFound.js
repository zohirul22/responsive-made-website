import React from 'react';
import logo from '../../../img/404.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center text-danger'>Not Found</h1>
          
            <img className='notfound-img' src={logo} alt="" />
        </div>
    );
};

export default NotFound;