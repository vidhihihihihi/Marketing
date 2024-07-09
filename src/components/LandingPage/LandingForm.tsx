import React from 'react';
import './LandingForm.css';

const LandingForm: React.FC = () => {
  return (
    <div className="contact-form-container">
      <h2>Talk to Digital Marketing Experts</h2>
      <form>
        <div className="form-group">
          <input type="text" placeholder="Name*" required />
          <input type="text" placeholder="Website" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email*" required />
          <input type="tel" placeholder="Phone*" required />
        </div>
        <div className="form-group full-width">
          <label>What Are You Looking For</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Digital Marketing
            </label>
            <label>
              <input type="checkbox" /> SEO Service
            </label>
            <label>
              <input type="checkbox" /> Social Media Marketing
            </label>
            <label>
              <input type="checkbox" /> Analytics & Tracking
            </label>
            <label>
              <input type="checkbox" /> Services
            </label>
            
          </div>
        </div>
        <div className="form-group full-width">
          <textarea placeholder="Message*" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default LandingForm;
