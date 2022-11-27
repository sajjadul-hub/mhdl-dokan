import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shered/Loading/Loading';
import CheckoutFrom from './CheckoutFrom';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const Payment = () => {
    const booking=useLoaderData();
    const navigation=useNavigation();
    const {treatment,price}=booking;
    if(navigation.state==='loading'){
        return<Loading></Loading>
    }
    return (
        <div className=' bg-amber-200 shadow-xl py-6 px-7 w-1/2 rounded-xl'>
            <h3 className='text-3xl'>Payment for {treatment}</h3>
            <p className='text-xl'>Please pay <strong>${price}</strong> for your product</p>
       <div className='w-96 my-6'>
       <Elements stripe={stripePromise}>
      <CheckoutFrom
      booking={booking}
      />
    </Elements>
       </div>
        </div>
    );
};

export default Payment;