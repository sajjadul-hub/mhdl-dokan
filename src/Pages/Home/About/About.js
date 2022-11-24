import React from 'react';
import Reviewimg from '../../../assets/images/Reviewimg.png'
import PrimaryButten from '../../../Components/PrimaryButten/PrimaryButten';
const About = () => {
  return (
    <div className="hero mt-40">
      <div className="hero-content flex-col lg:flex-row">
        <img src={Reviewimg} className="lg:w-1/2 rounded-lg " alt='' />
        <div className='ml-20'>
          <h1 className="text-5xl font-bold">We have an A+ rating</h1>
          <h1 className="text-3xl font-simbold mt-5 font-gradient-to-r from-primary  to-secondary">from the Better Business Bureau..</h1>
          <p className="py-6 font-simbold">
            and boast a near-perfect score on Facebook, Reseller Ratings, Trustpilot and Google Reviews.</p>
        </div>
      </div>
    </div>
  );
};

export default About;