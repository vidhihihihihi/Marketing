import React from "react";
import { Select, MenuItem, FormControl, SelectChangeEvent } from "@mui/material";
import "./MainHeader.css";

interface DropdownMenuProps {
  defaultValue: string;
  width: string;
  iconSrc: string;
  menuItems: string[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ defaultValue, width, iconSrc, menuItems }) => (
  <FormControl className="dropdown-menu" style={{ width }}>
    <Select
      defaultValue={defaultValue}
      disableUnderline
      displayEmpty
      IconComponent={() => <img width="16" height="16" src={iconSrc} alt="dropdown icon" />}
      onChange={(event: SelectChangeEvent<string>) => {
        // Handle change if needed
      }}
    >
      {menuItems.map((item, index) => (
        <MenuItem key={index} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

const MainHeader: React.FC<{ className?: string }> = ({ className = "" }) => {
  const menuItems: DropdownMenuProps[] = [
    { defaultValue: "Digital Marketing", width: "15%", iconSrc: "/chevron-icon.svg", menuItems: ["Digital Marketing","Paid Advertising Services","Search Engine Marketing","Social Media Marketing","Graphics Designing"] },
    { defaultValue: "SEO Service", width: "15%", iconSrc: "/chevron-icon.svg", menuItems: ["SEO Service","On Page SEO","Off Page SEO","Technical SEO service","Local SEO Service","Content Marketing"] },
    { defaultValue: "Social Media Marketing", width: "18%", iconSrc: "/chevron-icon.svg", menuItems: ["Social Media Marketing","Facebook Marketing","LinkedIn Marketing","Instagram Marketing","YouTube Marketing"] },
    { defaultValue: "Analytics & Tracking", width: "18%", iconSrc: "/chevron-icon.svg", menuItems: ["Analytics & Tracking"," Conversion Rate Optimisation","Google Analytics Setup & Tracking"] },
    { defaultValue: "Services", width: "15%", iconSrc: "/chevron-icon.svg", menuItems: ["Services"," Web Designing","UI/UX Designing","Logo Designing"] },
  ];

  return (
    <header className={`main-header ${className}`}>
      <div className="logo-container">
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

export default MainHeader;