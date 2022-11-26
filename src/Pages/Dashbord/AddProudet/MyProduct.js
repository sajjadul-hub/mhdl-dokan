import React, { useEffect, useState } from 'react';
import Product from './Product';

const MyProduct = () => {
    const[products,setproducts]=useState('');
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                products.map(product=><Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default MyProduct;