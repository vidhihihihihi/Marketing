import { FunctionComponent } from "react";
import { Link } from "react-router-dom"; 
import "./ProductBanner.css";

interface ProductBannerProps {
  heading: string;
  subheading: string;
  ctaText?: string;  
  ctaLink?: string;  
}

const ProductBanner: FunctionComponent<ProductBannerProps> = ({
  heading,
  subheading,
  ctaText = "Book Consultation",  
  ctaLink = "/contact-us-page"    
}) => {
  return (
    <div className="product-banner">
      <div className="banner-content">
        <h1 className="banner-heading">{heading}</h1>
        <p className="banner-subheading">{subheading}</p>
        <Link to={ctaLink} className="cta-button">  
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default ProductBanner;
