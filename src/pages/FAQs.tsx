import React, { useState } from 'react';
import MainHeader from '../components/MainHeader';
import FooterSection from '../components/FooterSection';
import './FAQs.css';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of digital marketing services including SEO, PPC, social media marketing, content marketing, and email marketing."
  },
  {
    question: "How long does it take to see results from SEO?",
    answer: "SEO is a long-term strategy. While some improvements can be seen within a few months, significant results typically take 6-12 months to materialize."
  },
  {
    question: "Do you offer custom marketing strategies?",
    answer: "Yes, we create tailored marketing strategies for each client based on their unique goals, target audience, and industry."
  },
  // Add more FAQs as needed
];

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [newQuestion, setNewQuestion] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the question to your backend
    console.log('Submitted question:', newQuestion);
    setNewQuestion('');
    alert('Thank you for your question. We will get back to you soon!');
  };

  return (
    <div className="faqs-page">
      <MainHeader />
      <div className="faqs-banner">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our services and digital marketing</p>
      </div>
      <div className="faqs-content">
      <div className="new-question-form">
          <h2>Can't find your question?</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Ask your question here..."
              required
            />
            <button type="submit">Submit Question</button>
          </form>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className={`faq-icon ${openFAQ === index ? 'open' : ''}`}>▼</span>
              </button>
              {openFAQ === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default FAQs;