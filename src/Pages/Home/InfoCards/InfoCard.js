import React from 'react';

const InfoCard = ({card}) => {
  const{icon,name,description,bgClass}=card;
    return (
        <div className={`card card-side ${bgClass} px-4`}>
            <img src={icon} alt="" />
            <div className="card-body text-white">
                <h2 className="card-title font-bold">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;