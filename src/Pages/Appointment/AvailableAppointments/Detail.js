import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

import Item from './Item';

const Detail = ({refetch}) => {
    const[model,setModel]=useState([])
    const { user } = useContext(AuthContext);
    const detaillist = useLoaderData();
    console.log(model);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const buyerName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            email,
            buyerName,
            phone,
            // price
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
                    setModel(null);
                    toast.success('Booking confirmed')
                    refetch();
                }
                else{
                    toast.error(data.message)
                }
            })
    }

    return (
        <div>
            {
                detaillist.map(delait=><Item key={delait._id} delait={delait} setModel={setModel}></Item>)
            }
             <input type="checkbox" id="booking-model" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="booking-model" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">{ }</h3>
                                <form onSubmit={''} className='grid grid-cols-1 gap-3 mt-10'>
                                    <input type="text" disabled value={''} className="input input-bordered w-full" />
                                    <select name='slot' className="select select-bordered w-full">
                                    </select>
                                    <input name='name' type="text" placeholder="Your name" defaultValue={user?.displayName} disabled readOnly className="input input-bordered w-full" required />
                                    <input name='email' defaultValue={user?.email} type="email" placeholder="Email Address" className="input input-bordered w-full" disabled readOnly required />
                                    <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full" />
                                    <br />
                                    <input type="submit" className="w-full btn btn-accent text-white" value='submit' />
                                </form>
                            </div>
                        </div>
        </div>
    );
};

export default Detail;