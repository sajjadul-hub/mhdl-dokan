import { useQuery } from '@tanstack/react-query';
import React, { useContext} from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    
    const url = `https://tech-com-server.vercel.app/booking?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
   
    const handleBooking = (data) => {
        const booking = {
            buyerName: user.displayName,
            email: user.email,
            laptopName:data.laptopName,
            price:data.price
        }
        //Todo: send data to the server
        //and once data is saved then close the model
        // and display success toast  
        fetch('https://tech-com-server.vercel.app/reports', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('product  Reported')
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <div>
            <h3 className='text-4xl mb-5 text-center font-bold '>My Orders :</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Laptop Name</th>
                            <th>Price</th>
                            <th>Report status</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings.map((booking, i) =>
                                <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.buyerName}</td>
                                    <td>{booking.laptopName}</td>
                                    <td>${booking.price}</td>
                                    <td> 
                                        <button onClick={()=>handleBooking(booking)} className='btn btn-red btn-sm'>Report</button>
                                        </td>
                                    <td>
                                        {
                                            booking.price && !booking.paid && <Link
                                                to={`/dashboard/payment/${booking._id}`}>
                                                <button className='btn btn-primary btn-sm'>
                                                    Pay
                                                </button></Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span className='text-primary'>paid</span>
                                        }
                                    </td>
                                </tr>)
                        }
                        {
                            // data.map()
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointment;