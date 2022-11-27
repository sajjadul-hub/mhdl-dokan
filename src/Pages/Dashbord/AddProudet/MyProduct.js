import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
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
                products.map(item=><Product key={item._id} item={item} setproducts={setproducts}></Product>)
            }
        </div>
    );
};

export default MyProduct;