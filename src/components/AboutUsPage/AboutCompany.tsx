import { FunctionComponent } from "react";
import "./AboutCompany.css";
import aboutgraphic from "./aboutgraphic.png";

export type AboutCompanyType = {
  className?: string;
};

const AboutCompany: FunctionComponent<AboutCompanyType> = ({
  className = "",
}) => {
  return (
      <div className="content-wrapper">
        <img src={aboutgraphic} alt="Company Overview" className="company-overview-image" />
        <div className="text-wrapper">
          <h3 className="about-our-company">About Our Company</h3>
          <div className="about-paragraph">
            Paragraphs are the building blocks of papers. Many students define paragraphs in 
            terms of length: a paragraph is a group of at least five sentences, a paragraph is
            half a page long, etc. In reality, though, the unity and coherence of ideas among 
            sentences is what constitutes a paragraph. Paragraphs are the building blocks of 
            papers. Many students define paragraphs in terms of length: a paragraph is a group 
            of at least five sentences, a paragraph is half a page long, etc. In reality, though, 
            the unity and coherence of ideas among sentences is what constitutes a paragraph.
            Paragraphs are the building blocks of papers. Many students define paragraphs in 
            terms of length: a paragraph is a group of at least five sentences, a paragraph is
            half a page long, etc. In reality, though, the unity and coherence of ideas among 
            sentences is what constitutes a paragraph. Paragraphs are the building blocks of 
            papers. Many students define paragraphs in terms of length: a paragraph is a group 
            of at least five sentences, a paragraph is half a page long, etc. In reality, though, 
            the unity and coherence of ideas among sentences is what constitutes a paragraph.
            Paragraphs are the building blocks of papers. Many students define paragraphs in 
            terms of length: a paragraph is a group of at least five sentences, a paragraph is
            half a page long, etc. In reality, though, the unity and coherence of ideas among 
            sentences is what constitutes a paragraph. Paragraphs are the building blocks of 
            papers. Many students define paragraphs in terms of length: a paragraph is a group 
            of at least five sentences, a paragraph is half a page long, etc. In reality, though, 
            the unity and coherence of ideas among sentences is what constitutes a paragraph.
          </div>
        </div>
      </div>
  );
};

export default AboutCompany;
