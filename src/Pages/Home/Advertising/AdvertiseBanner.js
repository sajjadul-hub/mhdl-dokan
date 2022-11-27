import React from 'react';

const AdvertiseBanner = ({ item }) => {
    const { title, img,price,details,name } = item
    return (
        <div className="card  shadow-xl image-full mt-20 mb-0">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title
                }</h2>
                <p>{details}</p>
               <div className='flex justify-between'>
               <p className='font-bold text-xl'>price: ${price}</p>
                <p className='font-bold text-xl'>Seller name: {name}</p>
               </div>
                <div className="card-actions ">
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseBanner;