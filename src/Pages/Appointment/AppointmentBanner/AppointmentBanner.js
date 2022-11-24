import React, { useState } from 'react';
import chari from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    
    return (
        <header className='my-6'>
            <div style={{background:`url(${bg})`}} className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='dentist chair' src={chari} className="  lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='mr-10 bg-slate-200 rounded-lg'>
                       <DayPicker
                       mode='single'
                       selected={selectedDate}
                       onSelect={setSelectedDate}
                       />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;