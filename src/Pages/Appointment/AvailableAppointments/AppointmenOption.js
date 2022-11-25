import React from 'react';
import { Link } from 'react-router-dom';

const AppointmenOption = ({ appointmenOption }) => {
    const { name, Description,img ,id} = appointmenOption;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <img style={{height:"300px"}} src={img} alt=''></img>
                <h2 className="text-3xl font-bold">{name}</h2>
                {/* <p>{slots.length} {slots.length >1 ? 'spaces':'space'}</p> */}
                <p>{Description}</p>
                <div className="card-actions justify-center">
                    <button  className="btn btn-primary text-white"><Link to={`/detail/${id}`}>See Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default AppointmenOption;