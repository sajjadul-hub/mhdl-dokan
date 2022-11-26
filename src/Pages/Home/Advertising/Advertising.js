import React, { useEffect, useState } from 'react';
import AdvertiseBanner from './AdvertiseBanner';

const Advertising = () => {
    const [advertising, setAdvertising] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/advertising')
            .then(res => res.json())
            .then(data => setAdvertising(data))
    }, [])
    console.log(advertising);
    return (
       <div>
           <h2 className='text-4xl mt-20 text-center font-simbold'>Here are {advertising.length} top-rating laptop advertising</h2>
           <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-rows-2'>
           {
               advertising.map(item => <AdvertiseBanner
                   key={item._id} item={item}
               >
               </AdvertiseBanner>
               )
           }
       </div>      
       </div>
       
)};

export default Advertising;