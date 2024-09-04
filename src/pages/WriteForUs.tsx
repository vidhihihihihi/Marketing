import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import WriteForUsBanner from "../components/WriteForUsPage/WriteForUsBanner";
import TopExamples from "../components/WriteForUsPage/WriteForUsExample";
import FooterSection from "../components/FooterSection";
import "./WriteForUs.css";

const WriteForUs: FunctionComponent = () => {
  return (
    <div className="write-for-us">
      <MainHeader />
      <WriteForUsBanner/>
      <section className="write-for-us-inner">
        <h2>Guidelines</h2>
        
        <h3>Content Relevance</h3>
        <ul>
          <li>Ensure your post aligns with our website's theme and topics: B2B Lead Generation, Demand Generation, B2B Advertising, Account-Based Marketing, Intent Data, Content Syndication.</li>
          <li>Familiarize yourself with our existing content to understand our tone, style, and subjects.</li>
          <li>Provide valuable and informative content relevant to our readers' interests, including tips, insights, industry trends, tutorials/case studies, or practical advice.</li>
          <li>Adhere to Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) guidelines.</li>
        </ul>

        <h3>Originality</h3>
        <ul>
          <li>Submit only original content not published elsewhere, including your own blog or other websites.</li>
          <li>Properly cite and credit sources for references, images, or quotes to avoid plagiarism.</li>
          <li>Incorporate relevant, high-quality images or visuals with necessary rights or permissions and appropriate attributions.</li>
        </ul>

        <h3>Writing Style and Structure</h3>
        <ul>
          <li>Write clearly, concisely, and engagingly, using a friendly and approachable tone.</li>
          <li>Break content into logical sections with subheadings, including an introduction and conclusion.</li>
          <li>Aim for approximately 1000 words or more, using proper H2, H3, and H4 headings.</li>
          <li>Keep paragraphs concise, limiting them to three sentences or fewer.</li>
          <li>Proofread thoroughly to ensure error-free content.</li>
        </ul>

        <h3>SEO Considerations</h3>
        <ul>
          <li>Incorporate relevant keywords naturally throughout the content.</li>
          <li>Include a compelling meta title and description.</li>
          <li>Mention the focus keyword and related keywords you want to target.</li>
        </ul>

        <h3>Author Bio and Backlinks</h3>
        <ul>
          <li>Provide a brief author bio (around 100 words) at the end of the post.</li>
          <li>You may include one relevant, non-promotional backlink within the article body.</li>
        </ul>

        <h3>Please Note</h3>
        <ul>
          <li>Share published posts with your network and link back to them.</li>
          <li>Do not repost the item on any other website, including your own or blogging sites.</li>
          <li>We reserve the right to make edits or choose not to publish a guest post.</li>
          <li>We do not accept any form of payment from writers.</li>
        </ul>
      </section>

      <section className="submission-options-wrapper">
        <div className="submission-options">
          <div className="submission-option">
            <div className="idea-submission-card">
              <h2>Idea Submission</h2>
              <p>Are you excited to share your insights and expertise with our audience? We would love to hear your blog post ideas! Please click below to submit your post.</p>
              <p>Once your post is published on our site, you'll be notified via email with the published link. Due to the volume of submissions, we may not be able to provide feedback to individuals that are not selected.</p>
              <p>We look forward to receiving your submission and appreciate your contribution to our website!</p>
              <button className="click-here">
              <a href="https://forms.gle/Kh4X879yD61GV6UN6" className="get-started-btn" target="_blank" rel="noopener noreferrer">
              Click Here
        </a></button>
              {/* https://forms.gle/Kh4X879yD61GV6UN6 */}
            </div>
          </div>
        </div>
      </section>
      <TopExamples />
      <FooterSection />
    </div>
  );
};

export default WriteForUs;