import React, { useState } from 'react';
import './Questions.css';

const FAQ: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  const questionsAndAnswers = [
    { question: 'What is your return policy?', answer: 'Our return policy is 30 days with a receipt.' },
    { question: 'How do I track my order?', answer: 'You can track your order using the tracking number provided in your confirmation email.' },
    { question: 'Do you offer customer support?', answer: 'Yes, we offer 24/7 customer support.' },
    { question: 'What payment methods are accepted?', answer: 'We accept all major credit cards, PayPal, and Apple Pay.' },
    { question: 'How do I cancel my order?', answer: 'You can cancel your order within 24 hours by contacting our support team.' },
    { question: 'Do you ship internationally?', answer: 'Yes, we ship to over 100 countries worldwide.' },
  ];

  return (
    <div className="faq-container">
      <div className="heading-container">
        <h2>Frequently Asked Questions</h2>
        <p>Have more questions? We’d be happy to answer them!</p>
        <button className="get-in-touch" onClick={() => window.location.href = '/contact-us-page'}>
          Get in touch
        </button>
      </div>
      <div className="questions">
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="question-item">
            <button className="question-button" onClick={() => toggleQuestion(index)}>
              {item.question}
            </button>
            {openQuestion === index && <div className="answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
