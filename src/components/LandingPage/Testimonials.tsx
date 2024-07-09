import React, { useState } from 'react';
import './Testimonials.css';
import photo1 from './photo1.jpg';
import photo2 from './photo2.jpg';

const testimonials = [
    {
        photo: photo1, 
        testimonial: 'Client 1 testimonial goes here.',
        name: 'Client 1',
        designation: 'Designation 1',
    },
    {
        photo: photo2, 
        testimonial: 'Client 2 testimonial goes here.',
        name: 'Client 2',
        designation: 'Designation 2',
    },
    // Add more testimonials here
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="testimonials-container">
            <div className="arrows">
                <button onClick={handlePrev}>&#8592;</button>
                <button onClick={handleNext}>&#8594;</button>
            </div>
            <div className="testimonial-box">
                <div className="testimonial-text">
                    {testimonials[currentIndex].testimonial}
                </div>
                <div className="testimonial-photo">
                    <img src={testimonials[currentIndex].photo} alt={testimonials[currentIndex].name} />
                </div>
                <div className="testimonial-info">
                    <p className="name">{testimonials[currentIndex].name}</p>
                    <p className="designation">{testimonials[currentIndex].designation}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
