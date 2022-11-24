import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shered/Loading/Loading';
import BookingModel from '../BookingModel/BookingModel';
import AppointmenOption from './AppointmenOption';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointmenOptions, setAppointmenOptions] = useState([])
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const { data: appointmenOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='mt-10 grid gap-8 lg:grid-cols-3 md:grid-cols-2'>
                {
                    appointmenOptions.map(appointmenOption => <AppointmenOption key={appointmenOption._id} appointmenOption={appointmenOption}
                        setTreatment={setTreatment}

                    ></AppointmenOption>)
                }
            </div>
            {
                treatment && <BookingModel
                    refetch={refetch}
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModel>
            }
        </section>
    );
};

export default AvailableAppointments;