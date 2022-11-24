import React from 'react';

const AppointmenOption = ({ appointmenOption,setTreatment }) => {
    const { name, slots,price } = appointmenOption;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-primary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] :'Try Another day'}</p>
                <p>{slots.length} {slots.length >1 ? 'spaces':'space'}</p>
                <p><small>price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label 
                   disabled={slots.length===0}
                    onClick={()=>setTreatment(appointmenOption)}
                    htmlFor="booking-model"
                 className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmenOption;