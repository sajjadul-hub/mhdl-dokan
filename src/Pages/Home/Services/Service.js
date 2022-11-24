import React from 'react';

const Service = ({service}) => {
    const{icon,name,description}=service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img style={{height:'200px'}} src={icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl text-purple-600">{name}</h2>
                <p className='font-bold'>{description}</p>
            </div>
        </div>
    );
};

export default Service;