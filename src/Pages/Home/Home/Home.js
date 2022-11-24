import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
          <Services></Services>
          <About></About>

          <Testimonial></Testimonial>
          <InfoCards></InfoCards>
        </div>
    );
};

export default Home;