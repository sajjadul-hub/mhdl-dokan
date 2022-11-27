
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaSmile } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const BookingModel = ({ treatment, setTreatment, refetch }) => {
    const { title,price } = treatment;
    const { user } = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const buyerName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const laptopName = form.laptopName.value;

        const booking = {
            buyerName,
            email,
            phone,
            laptopName,
            price
        }
        console.log(booking);
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
                    toast.success('product order confirmed')
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
                    <div className='flex bg-primary rounded-xl justify-center gap-3 py-2'>
                    <FaSmile style={{height:'27px',width:'25px'}} className='text-yellow-100'></FaSmile>
                    <h3 className="text-xl font-bold text-center ">{title}</h3>
                    <FaSmile style={{height:'27px',width:'25px'}} className='text-yellow-100'></FaSmile>
                    </div>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type='text' name="laptopName" disabled value={title} className="input input-bordered w-full font-bold" />
                        <input type='number' name="price" disabled value={price} className="input input-bordered w-full font-bold" />
                        <input name='name' type="text" placeholder="Your name" defaultValue={user?.displayName} disabled readOnly className="input input-bordered w-full" required />
                        <input name='email' defaultValue={user?.email} type="email" placeholder="Email Address" className="input input-bordered w-full" disabled readOnly required />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input type="submit" className="w-full  btn btn-primary  bg-gradient-to-r from-primary  to-secondary text-white text-lg" value='submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModel;