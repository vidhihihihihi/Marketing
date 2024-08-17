import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Questions.css';

interface QuestionAndAnswer {
  question: string;
  answer: string;
}

interface FAQProps {
  questionsAndAnswers: QuestionAndAnswer[];
  title?: string;
  subtitle?: string;
  contactButtonText?: string;
  contactButtonLink?: string;
}

const FAQ: React.FC<FAQProps> = ({
  questionsAndAnswers,
  title = "Frequently Asked Questions",
  subtitle = "Have more questions? We'd be happy to answer them!",
  contactButtonText = "Get in touch",
  contactButtonLink = '/contact-us-page'
}) => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  return (
    <div className="faq-container">
      <div className="heading-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Link to={contactButtonLink} className="get-in-touch">
          <button className="get-in-touch-button">
            {contactButtonText}
          </button>
        </Link>
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
