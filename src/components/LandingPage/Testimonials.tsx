import React, { useState } from 'react';
import './Testimonials.css';
import photo1 from './photo1.jpeg';
import photo2 from './photo2.jpeg';

const testimonials = [
    {
        photo: photo1, 
        testimonial: "Partnering with Marketing DNA has been one of the best decisions for our business. Their expertise in digital marketing and SEO has dramatically increased our online visibility, bringing in a steady stream of quality leads. Their team is professional, responsive, and truly understands our industry. We've seen a significant boost in our search engine rankings and overall web traffic since we started working with them.",
        name: 'Client 1',
        designation: 'Founder of Simco Steel',
    },
    {
        photo: photo2, 
        testimonial: "Marketing DNA has transformed our online presence and helped us reach new heights. Their social media marketing and web design services have been exceptional, resulting in increased engagement and a more professional and user-friendly website. The team's attention to detail and commitment to our success is evident in every project they undertake.",
        name: 'Client 2',
        designation: 'Founder of Mesco Storage System',
    },
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
                <button onClick={handlePrev}>←</button>
                <button onClick={handleNext}>→</button>
            </div>
            <div className="testimonial-box">
                <img src={testimonials[currentIndex].photo} alt={testimonials[currentIndex].name} />
                <div className="testimonial-content">
                    <div className="testimonial-info">
                        <h3>{testimonials[currentIndex].name}</h3>
                        <p>{testimonials[currentIndex].designation}</p>
                    </div>
                    <div className="testimonial-text">
                        <p>{testimonials[currentIndex].testimonial}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;