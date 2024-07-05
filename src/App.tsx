import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPageDraft from "./pages/LandingPageDraft";
import CareersPage from "./pages/CareersPage";
import WriteForUs from "./pages/WriteForUs";
import CaseStudies from "./pages/CaseStudies";
import ProductPage from "./pages/ProductPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import JobOpeningPost from "./pages/JobOpeningPost";

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
      case "/product-page":
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
      case "/job-opening-post":
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
      <Route path="/" element={<LandingPageDraft />} />
      <Route path="/careers-page" element={<CareersPage />} />
      <Route path="/write-for-us" element={<WriteForUs />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/product-page" element={<ProductPage />} />
      <Route path="/contact-us-page" element={<ContactUsPage />} />
      <Route path="/about-us-page" element={<AboutUsPage />} />
      <Route path="/job-opening-post" element={<JobOpeningPost />} />
    </Routes>
  );
}
export default App;