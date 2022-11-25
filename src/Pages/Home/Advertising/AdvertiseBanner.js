import React from 'react';

const AdvertiseBanner = ({ item }) => {
    const { title, img,price } = item
    return (
        <div className="card  shadow-xl image-full mt-20 mb-0">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title
                }</h2>
                <p>price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseBanner;