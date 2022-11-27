import { useQuery } from '@tanstack/react-query';
import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    
    const url = `http://localhost:5000/booking?email=${user?.email}`;

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
   
   




    return (
        <div>
            <h3 className='text-4xl mb-5 '>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Laptop Name</th>
                            <th>Price</th>
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