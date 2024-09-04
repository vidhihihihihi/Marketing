import React from "react";
import MainHeader from "../components/MainHeader";
import CareerBanner from "../components/CareersPage/CareerBanner";
import FooterSection from "../components/FooterSection";
import "./CareersPage.css";

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: "Software Developer",
      type: "Work from office | Full time",
      formLink: "https://forms.gle/8jwn42CR1CjWtWqm9",
    },
    {
      title: "UX Designer",
      type: "Remote | Full time",
      formLink: "https://forms.gle/r33xhPVHYZNQekZx9",
    },
    {
      title: "Product Manager",
      type: "Hybrid | Full time",
      formLink: "https://forms.gle/U4cjxvRQUymnjUTZ6",
    },
  ];

  return (
    <div className="careers-page">
      <MainHeader />
      <CareerBanner />
      <section className="company-culture">
      <div className="company-culture-content">
       <h2 className="heading">Join Our Team</h2>
       <p>
         At our company, we believe in fostering a culture of innovation,
         collaboration, and growth. We're always looking for passionate
         individuals who are eager to make a difference and push the
         boundaries of what's possible.
       </p>
       <p>
         We value diversity and believe that great ideas can come from anywhere. 
         Here, your voice will be heard, and your contributions will matter. 
         Whether you're a seasoned professional or just starting your career, 
         we offer a platform for you to learn, grow, and excel.
       </p>
       <p>
         Innovation is at the heart of everything we do. We encourage our team 
         members to think outside the box, take calculated risks, and bring their 
         unique perspectives to the table. If you're passionate about solving 
         complex problems and creating cutting-edge solutions, you'll find your 
         place here.
       </p>
       <p>
         We believe in work-life balance and offer flexible working arrangements 
         to ensure our team members can perform at their best. Our comprehensive 
         benefits package, competitive salaries, and focus on employee well-being 
         demonstrate our commitment to your overall success and happiness.
       </p>
       <p>
         As part of our team, you'll have the opportunity to work with some of the 
         brightest minds in the industry. We foster a collaborative environment 
         where knowledge sharing is encouraged, and mentorship opportunities are 
         abundant. Your growth is our growth.
       </p>
       <p>
         If you're excited about the prospect of working in a dynamic, 
         fast-paced environment where your ideas can flourish and your career 
         can thrive, we encourage you to explore our current openings and 
         apply today. Your future starts here!
       </p>
      </div>
        <div className="open-positions">
          <h2 className="current-openings">Current Openings</h2>
          {jobOpenings.map((job, index) => (
            <div key={index} className="job-item">
              <h3 className="job-opening-name">{job.title}</h3>
              <div className="job-details">
                <div className="job-type">{job.type}</div>
                <a href={job.formLink} className="view-post" target="_blank" rel="noopener noreferrer">
                  View Post →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="open-application">
        <h2>Can't See a Position That Suits You?</h2>
        <p>We're always looking for smart, motivated people. Send us your CV and let's have a chat. We'd love to meet you!</p>
        <a href="https://forms.gle/2rv1o6ykucUxnFYC7" className="get-started-btn" target="_blank" rel="noopener noreferrer">
          Get Started
        </a>
      </section>
      <FooterSection />
    </div>
  );
};

export default CareersPage;