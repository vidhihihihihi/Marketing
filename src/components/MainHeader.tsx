import React from "react";
import { Select, MenuItem, FormControl, SelectChangeEvent } from "@mui/material";
import { useNavigate } from "react-router-dom";
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

  return (
    <header className={`main-header ${className}`}>
      <div className="logo-container" onClick={() => navigate("/")}>
        <a className="logo">Logo</a>
      </div>
      <nav className="nav-menu">
        {menuItems.map((item, index) => (
          <DropdownMenu key={index} {...item} />
        ))}
      </nav>
      <div className="cta-container">
        <div className="cta-text">Get Free Audit Report</div>
        <a href="tel:+918088698016" className="phone-number">+918088698016</a>
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
