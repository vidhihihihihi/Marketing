import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./Header1.css";

export type Header1Type = {
  className?: string;
  careersStartHere?: string;
};

const Header1: FunctionComponent<Header1Type> = ({
  className = "",
  careersStartHere,
}) => {
  return (
    <section className={`header3 ${className}`}>
      <header className="frame-header">
        <div className="rectangle-parent7">
          <div className="frame-child14" />
          <a className="logo4">Logo</a>
        </div>
        <div className="frame-wrapper">
          <FormControl
            className="parent2"
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
                <img
                  width="8px"
                  height="5.6px"
                  src="/search-icon.svg"
                  style={{}}
                />
              )}
            >
              <MenuItem>Digital Marketing</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className="frame-wrapper1">
          <div className="account-dropdown-parent">
            <FormControl
              className="account-dropdown"
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
            <div className="input-element-content-frame">
              <div className="input-element-content5">
                <div className="signed-by-base-input-element5" />
                <a className="login-placeholder">Social Media Marketing</a>
              </div>
            </div>
            <div className="input-element-content6">
              <div className="signed-by-base-input-element6" />
              <div className="signup-placeholder">{`Analytics & Tracking
`}</div>
            </div>
          </div>
        </div>
        <div className="hero-content-container">
          <FormControl
            className="hero-content1"
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
        <div className="frame-wrapper2">
          <div className="input-element-content-group">
            <div className="input-element-content7">
              <div className="signed-by-base-input-element7" />
              <div className="cta-placeholder">Get Free Audit Report</div>
            </div>
            <div className="frame-parent22">
              <div className="image-7-frame">
                <img
                  className="image-7-icon4"
                  loading="lazy"
                  alt=""
                  src="/image-7@2x.png"
                />
              </div>
              <div className="vector-group">
                <img className="frame-child15" alt="" src="/rectangle-2.svg" />
                <a className="cta-image-caption-container">
                   
                  <a className="a5" href="tel:+918088698016" target="_blank">
                    <span className="span4">+918088698016</span>
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="careers-intro">
        <h2 className="careers-start-here">{careersStartHere}</h2>
        <div className="liner">1 liner</div>
        <div className="careers-intro-image-background-parent">
          <div className="careers-intro-image-background" />
          <div className="careers-intro-image" />
        </div>
      </div>
    </section>
  );
};

export default Header1;
