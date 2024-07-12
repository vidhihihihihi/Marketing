import React from 'react';
import './CareerBanner.css';

const CareerBanner: React.FC = () => {
  return (
    <div className="career-banner">     
        <h1 className="banner-heading">CAREERS: START HERE</h1>
        <div className="banner-line"></div>
        <h2 className="banner-subheading">
          Creative, Passionate, Ambitious, Friendly—and Sharp as a tack? Join Us. Let's make beautiful pixels together.
        </h2>
    </div>
  );
};

export default CareerBanner;