import React, { useState } from "react";
import { Select, MenuItem, FormControl, SelectChangeEvent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import companylogo from "./main_logo.png";
import "./MainHeader.css";

interface DropdownMenuProps {
  defaultValue: string;
  width: string;
  iconSrc: string;
  menuItems: string[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ defaultValue, width, iconSrc, menuItems }) => {
  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedItem = event.target.value as string;
    const basePath = defaultValue.toLowerCase().replace(/\s+/g, "-");
    navigate(`/${basePath}`);
  };

  return (
    <FormControl className="dropdown-menu" style={{ width }}>
      <Select
        defaultValue=""
        disableUnderline
        displayEmpty
        IconComponent={() => <img width="16" height="16" src={iconSrc} alt="dropdown icon" />}
        onChange={handleChange}
        renderValue={(value) => (value ? value : defaultValue)}
      >
        {menuItems.filter(item => item !== defaultValue).map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const MainHeader: React.FC<{ className?: string }> = ({ className = "" }) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  return (
    <header className={`main-header ${className}`}>
      <div className="logo-container" onClick={() => navigate("/")}>
      <img src={companylogo} alt="Company Logo" />
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        {menuItems.map((item, index) => (
          <DropdownMenu key={index} {...item} />
        ))}
        <div className="mobile-cta-container" onClick={() => navigate("/contact-us-page")}>
          <div className="cta-text">Get Free Audit Report</div>
        </div>
      </nav>
      <div className="cta-container" onClick={() => navigate("/contact-us-page")}>
        <div className="cta-text">Get Free Audit Report</div>
      </div>
    </header>
  );
};

const menuItems: DropdownMenuProps[] = [
  { defaultValue: "Digital Marketing", width: "15%", iconSrc: "/chevron-icon.svg", menuItems: ["All Digital Marketing Services","Paid Advertising Services","Search Engine Marketing","Social Media Marketing","Graphics Designing"] },
  { defaultValue: "SEO Service", width: "15%", iconSrc: "/chevron-icon.svg", menuItems: ["All SEO Services","On Page SEO","Off Page SEO","Technical SEO service","Local SEO Service","Content Marketing"] },
  { defaultValue: "Social Media Marketing", width: "18%", iconSrc: "/chevron-icon.svg", menuItems: ["Facebook Marketing","LinkedIn Marketing","Instagram Marketing","YouTube Marketing"] },
  { defaultValue: "Analytics & Tracking", width: "18%", iconSrc: "/chevron-icon.svg", menuItems: ["All Analytics & Tracking Services","Conversion Rate Optimisation","Google Analytics Setup & Tracking"] },
  { defaultValue: "Other Services", width: "15%", iconSrc: "/chevron-icon.svg", menuItems: ["Web Designing","UI/UX Designing","Logo Designing","Web/App Development"] },
];

export default MainHeader;
