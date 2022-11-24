import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const BookingModel = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name, slots,price } = treatment;
    const data = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patient = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: data,
            treatment: name,
            patient,
            slot,
            email,
            phone,
            price
        }
        //Todo: send data to the server
        //and once data is saved then close the model
        // and display success toast  
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed')
                    refetch();
                }
                else{
                    toast.error(data.message)
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-model" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-model" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={data} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your name" defaultValue={user?.displayName} disabled readOnly className="input input-bordered w-full" required />
                        <input name='email' defaultValue={user?.email} type="email" placeholder="Email Address" className="input input-bordered w-full" disabled readOnly required />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input type="submit" className="w-full btn btn-accent text-white" value='submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModel;