import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./Header3.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <section className={`header6 ${className}`}>
      <header className="header-left">
        <div className="header-logo">
          <div className="header-logo-child" />
          <a className="logo9">Logo</a>
        </div>
        <div className="header-links">
          <FormControl
            className="parent3"
            variant="standard"
            sx={{
              borderTopWidth: "0px",
              borderRightWidth: "0px",
              borderBottomWidth: "0px",
              borderLeftWidth: "0px",
              borderRadius: "0px 0px 0px 0px",
              width: "100%",
              height: "40px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "40px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "40px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "40px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "40px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#000",
                fontSize: 14,
                fontWeight: "Regular",
                fontFamily: "Inter",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img width="8px" height="5.6px" src="/vector.svg" style={{}} />
              )}
            >
              <MenuItem>Digital Marketing</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className="header-right">
          <div className="auth-buttons">
            <FormControl
              className="login-button"
              variant="standard"
              sx={{
                borderTopWidth: "0px",
                borderRightWidth: "0px",
                borderBottomWidth: "0px",
                borderLeftWidth: "0px",
                borderRadius: "0px 0px 0px 0px",
                width: "95px",
                height: "20px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "20px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "20px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "20px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "20px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#000",
                  fontSize: 14,
                  fontWeight: "Regular",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="8px"
                    height="5.6px"
                    src="/vector-1.svg"
                    style={{}}
                  />
                )}
              >
                <MenuItem>SEO Service</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className="signup-button">
              <div className="input-element-content11">
                <div className="signed-by-base-input-element11" />
                <a className="text33">Social Media Marketing</a>
              </div>
            </div>
            <div className="input-element-content12">
              <div className="signed-by-base-input-element12" />
              <div className="text34">{`Analytics & Tracking
`}</div>
            </div>
          </div>
        </div>
        <div className="hero1">
          <FormControl
            className="hero-content3"
            variant="standard"
            sx={{
              borderTopWidth: "0px",
              borderRightWidth: "0px",
              borderBottomWidth: "0px",
              borderLeftWidth: "0px",
              borderRadius: "0px 0px 0px 0px",
              width: "89px",
              height: "20px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "20px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "20px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "20px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "20px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#000",
                fontSize: 14,
                fontWeight: "Regular",
                fontFamily: "Inter",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="8px"
                  height="5.6px"
                  src="/vector-2.svg"
                  style={{}}
                />
              )}
            >
              <MenuItem>Services</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className="hero-form1">
          <div className="hero-form-fields">
            <div className="input-element-content13">
              <div className="signed-by-base-input-element13" />
              <div className="text35">Get Free Audit Report</div>
            </div>
            <div className="hero-form-cta">
              <div className="hero-form-cta-icon">
                <img
                  className="image-7-icon9"
                  loading="lazy"
                  alt=""
                  src="/image-7@2x.png"
                />
              </div>
              <div className="vector-parent1">
                <img className="frame-child27" alt="" src="/rectangle-2.svg" />
                <a className="a11">
                   
                  <a className="a12" href="tel:+918088698016" target="_blank">
                    <span className="span9">+918088698016</span>
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="job-summary">
        <h2 className="job-opening-name3">Job Opening Name</h2>
        <div className="liner1">1 liner</div>
        <div className="job-tags">
          <div className="job-tags-child" />
          <div className="job-tags-item" />
        </div>
      </div>
    </section>
  );
};

export default Header;
