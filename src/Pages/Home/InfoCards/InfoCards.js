import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import PrimaryButten from '../../../Components/PrimaryButten/PrimaryButten';
import InfoCard from './InfoCard';
const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9:30am to 5:00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary  to-secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+000 123 456789',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary  to-secondary'
        }
    ]
    return (
        <div className='my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
            <div className='grid grid-cols-1 gap-6'>
                {
                    cardData.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
                }
            </div>
            <div className='rounded-lg bg-blue-400 flex flex-col justify-center items-center'>
                <h2 className='text-5xl text-white font-bold'>Text us to sell</h2>
                <h2 className='text-4xl font-semibold my-7'>(312) 588-6220</h2>
                <p className='text-xl'>(Text messages only. No phone calls.)</p>
                <p className='my-3 text-xl text-white font-bold'>Message us via</p>
                <PrimaryButten>Facebook Messenger</PrimaryButten>

            </div>
        </div>
    );
};

export default InfoCards;