import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {

    const [experts ,setExperts] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setExperts(data))
    } ,[])
    return (
        <div className='container' id='experts'>
            <h1 className='text-center text-primary mt-5'> All Experts</h1>
           <div className="row">
           {
                experts.map(expert => <Expert
                key={expert.id}
                expert={expert}
                ></Expert>)
            }
           </div>
        </div>
    );
};

export default Experts;