import React from 'react';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div className='container'>
           <Services></Services>
           <Experts></Experts>
        </div>
    );
};

export default Home;