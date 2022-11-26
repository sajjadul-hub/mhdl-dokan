import React from 'react';

const Product = ({product}) => {
    const{specialty,image,condition,details,location,date,name,price}=product;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="" style={{height:'200px'}} /></figure>
            <div className="card-body">
              <div className='flex lg:gap-16'>
              <h2 className="card-title">
                    {specialty}
                    <div className="badge badge-secondary">${price}</div>
                </h2>
                <p className="bg-primary rounded-lg px-1"><b>condition:</b>{condition}</p>
              </div>
                <p>{details}</p>
                <div className="card-actions justify-end gap-3">
                
                    <div className='card-actions justify-between'>
                    <div className="badge badge-outline">{date}</div>
                    <div className="badge badge-outline font-bold">{location}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;