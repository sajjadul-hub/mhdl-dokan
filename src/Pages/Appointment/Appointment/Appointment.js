import React, { useState } from 'react';
import Services from '../../Home/Services/Services';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date());
    return (
        <div className='mt-12 mb-9'>
           <h2 className='text-4xl font-bold text-sky-300 text-center'>World top-using companyes laptop</h2>
            <AvailableAppointments selectedDate={selectedDate}></AvailableAppointments>
            <Services></Services>
        </div>
    );
};

export default Appointment;