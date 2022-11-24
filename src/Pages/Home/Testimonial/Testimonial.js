import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import reviewer from '../../../assets/images/people1.png'
import reviewer2 from '../../../assets/images/people2.png'
import reviewer3 from '../../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            country: 'California',
            description: 'WHY WE LIKE IT: Fantastic all-around laptop that is perfect for students, thanks to a relatively budget-friendly price point, a long-lasting battery, 12 hours on a single charge, and integrated SSD storage, up to 512GB.',
            img: reviewer,
        },
        {
            _id: 2,
            name: 'Winson liza',
            country: 'UK',
            description: 'This is a stunning laptop that is perfect for power users, thanks to a best-in-class Intel processor, thermal dispersion technology that helps keep things cool and a newly designed keyboard with an ESC key and plenty of space for multi-touch gestures.',
            img: reviewer2,
        },
        {
            _id: 3,
            name: 'jesika Herry',
            country: 'New York',
            description: 'Budget-friendly refurbished product, backed with an Amazon guarantee, that includes a 2.3GHz dual-core i5 Intel Core processor that can be overclocked to 3.6GHz and an extremely bright 13.3” Retina display, with SSD storage built-in.',
            img: reviewer3,
        }
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div >
                    <h4 className='text-2xl font-bold text-secondary'>Reviews</h4>
                    <h1 className='text-4xl'>What Our Reviewers Says</h1>
                </div>
                <figure>
                    <img src={quote} className='w-24 lg:w-48' alt='' />
                </figure>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;