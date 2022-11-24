import React from 'react';

const Review = ({ review }) => {
    const { img, country, name, description } = review;
    return (
        <div className="card shadow-xl p-3">
            <div className="card-body">

                <p>{description}</p>
                <div className="card-actions justify-start gap-5 mt-4">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img alt='' src={img} />
                        </div>
                    </div>
                    <div>

                    <h2 className="card-title">{name}</h2>
                    <h2>{country}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;