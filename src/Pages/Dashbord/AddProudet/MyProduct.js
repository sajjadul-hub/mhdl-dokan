import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Item from '../../Appointment/AvailableAppointments/Item';
import Product from './Product';

const MyProduct = () => {
    const[products,setproducts]=useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setproducts(data);
            })
    }, [])
       console.log(products);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                products.map(item=><Product key={item._id} item={item}></Product>)
            }
        </div>
    );
};

export default MyProduct;