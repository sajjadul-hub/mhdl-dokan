import React from 'react';
import Selection from '../../../assets/images/selecticon.png'
import shipicon from '../../../assets/images/shipicon.png'
import paidicon from '../../../assets/images/paidicon.png'
import Service from './Service';
const Services = () => {
    const serviceData = [
        
        {
            id: 1,
            name: ' Get an estimate',
            description: 'Select a category and answer a few questions about your gadget, and we’ll share an estimate.',
            icon: Selection,    
        },
        {
            id: 2,
            name: 'Ship your gadget',
            description: 'Print out your prepaid shipping label, pack your gadget and drop it off at any UPS Store.',
            icon: shipicon,
        },
        {
            id: 3,
            name: 'Get paid',
            description: 'Within two business days of receiving your gadget, we’ll send your payment via Check, PayPal, Venmo or a Zelle––whatever you prefer.',
            icon: paidicon,
        }
    ]

    return (
        <div className='mt-40'>
            <div className='text-center'>
                <p className='text-5xl mt-2'>How it works</p>
            </div>
            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {
                    serviceData.map(service=><Service key={service.id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;