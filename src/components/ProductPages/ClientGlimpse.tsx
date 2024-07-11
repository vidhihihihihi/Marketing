import React, { useEffect, useState } from 'react';
import logo1 from "./logo1.jpg";
import logo2 from "./logo2.png";
import logo3 from "./logo3.jpeg";
import './ClientGlimpse.css';

interface ClientGlimpseProps {}

const ClientGlimpse: React.FC<ClientGlimpseProps> = () => {
  const [position, setPosition] = useState(0);

  const logos = [
    { id: 1, src: logo1, alt: 'Company 1' },
    { id: 2, src: logo2, alt: 'Company 2' },
    { id: 3, src: logo3, alt: 'Company 3' },
    { id: 4, src: logo1, alt: 'Company 4' },
    { id: 5, src: logo2, alt: 'Company 5' },
    { id: 6, src: logo3, alt: 'Company 6' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        if (prevPosition <= -100) {
          return 0;
        }
        return prevPosition - 0.1; // Slower movement
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="client-glimpse">
      <h2>Glimpse Of Clients</h2>
      <div className="logo-carousel">
        <div 
          className="logo-container" 
          style={{ transform: `translateX(${position}%)` }}
        >
          {logos.concat(logos).map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="logo-item">
              <img src={logo.src} alt={logo.alt} className="logo-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientGlimpse;