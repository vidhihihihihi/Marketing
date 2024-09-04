import React from 'react';
import email from './email.png';
import call from './call.png';
import address from './address.png';
import socialmedia from './socialmedia.png';
import facebook from './facebook.png';
import linkedin from './linkedin.png';
import instagram from './instagram.png';
import twitter from './twitter.png';
import './ContactUs.css';

const ContactUs: React.FC = () => {
  return (
    <div className="content-container">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <div className="contact-columns">
          <div className="left-column">
            <div className="contact-item">
              <img src={email} alt="Email Icon" className="icon"/>
              <h3>Email</h3>
              <div>
                <a href="mailto:info@marketingdna.in">info@marketingdna.in</a>
                <br />
                <a href="mailto:info@marketingdna.in">info@marketingdna.in</a>
              </div>
            </div>
            <div className="contact-item">
              <img src={call} alt="Phone Icon" className="icon"/>
              <h3>Phone</h3>
              <div>
                <a href="tel:+919304292685">+919304292685</a>
                <br />
                <a href="tel:+919304292685">+919304292685</a>
              </div>
            </div>
            <div className="contact-item">
              <img src={address} alt="Address Icon" className="icon"/>
              <h3>Address</h3>
              <div>
                No.101, Sy No.50/1 Horamavu Agara Bangalore-560043
              </div>
            </div>
          </div>
          <div className="right-column">
            <div className="social-media">
              <img src={socialmedia} alt="Social Media Icon" className="icon"/>
              <h3>Social Media</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="Facebook Icon" className="icon"/>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="Twitter Icon" className="icon"/>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn Icon" className="icon"/>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Instagram Icon" className="icon"/>
                </a>
              </div>
            </div>
            <div className="business-hours">
              <h3>Business Hours</h3>
              <p>Mon - Sat: 10am - 6pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
