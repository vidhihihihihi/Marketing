import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CareersPage from "./pages/CareersPage";
import WriteForUs from "./pages/WriteForUs";
import CaseStudies from "./pages/CaseStudies";
import DigitalMarketing from "./pages/ProductPages/DigitalMarketing";
import AnalyticsTracking from "./pages/ProductPages/Analytics&Tracking";
import OtherServices from "./pages/ProductPages/OtherServices";
import SocialMediaMarketing from "./pages/ProductPages/SocialMediaMarketing";
import SEOService from "./pages/ProductPages/SEOService";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import Blogs from './pages/Blogs';
import FAQs from "./pages/FAQs";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/careers-page":
        title = "";
        metaDescription = "";
        break;
      case "/write-for-us":
        title = "";
        metaDescription = "";
        break;
      case "/case-studies":
        title = "";
        metaDescription = "";
        break;
      case "/digital-marketing":
        title = "";
        metaDescription = "";
        break;
      case "/analytics-&-tracking":
          title = "";
          metaDescription = "";
          break;
      case "/other-services":
            title = "";
            metaDescription = "";
            break;     
      case "/seo-service":
            title = "";
            metaDescription = "";
            break;     
      case "/social-media-marketing":
            title = "";
            metaDescription = "";
            break;          
      case "/contact-us-page":
        title = "";
        metaDescription = "";
        break;
      case "/about-us-page":
        title = "";
        metaDescription = "";
        break;
      case "/blogs":
        title = "";
        metaDescription = "";
        break;
      case "/faqs":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/careers-page" element={<CareersPage />} />
      <Route path="/write-for-us" element={<WriteForUs />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/digital-marketing" element={<DigitalMarketing/>} />
      <Route path="/analytics-&-tracking" element={<AnalyticsTracking/>} />
      <Route path="/other-services" element={<OtherServices/>} />
      <Route path="/seo-service" element={<SEOService/>} />
      <Route path="/social-media-marketing" element={<SocialMediaMarketing/>} />
      <Route path="/contact-us-page" element={<ContactUsPage />} />
      <Route path="/about-us-page" element={<AboutUsPage />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/faqs" element={<FAQs />} />

    </Routes>
  );
}
export default App;