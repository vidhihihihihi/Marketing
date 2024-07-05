import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./Header2.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={`header4 ${className}`}>
      <div className="rectangle-parent12">
        <div className="frame-child21" />
        <a className="logo7">Logo</a>
      </div>
      <div className="navigation1">
        <FormControl
          className="search-input"
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
              <img width="8px" height="5.6px" src="/vector-2.svg" style={{}} />
            )}
          >
            <MenuItem>Digital Marketing</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className="hero">
        <div className="hero-content2">
          <FormControl
            className="hero-form"
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
                  src="/vector-3.svg"
                  style={{}}
                />
              )}
            >
              <MenuItem>SEO Service</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <div className="password-input">
            <div className="input-element-content8">
              <div className="signed-by-base-input-element8" />
              <a className="text32">Social Media Marketing</a>
            </div>
          </div>
          <div className="input-element-content9">
            <div className="signed-by-base-input-element9" />
            <div className="submit-label">{`Analytics & Tracking
`}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <FormControl
          className="feature-list"
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
              <img width="8px" height="5.6px" src="/vector-4.svg" style={{}} />
            )}
          >
            <MenuItem>Services</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className="content4">
        <div className="content-block">
          <div className="input-element-content10">
            <div className="signed-by-base-input-element10" />
            <div className="content-placeholder">Get Free Audit Report</div>
          </div>
          <div className="content-media">
            <div className="image-block">
              <img
                className="image-7-icon7"
                loading="lazy"
                alt=""
                src="/image-7@2x.png"
              />
            </div>
            <div className="image-caption">
              <img
                className="image-caption-child"
                alt=""
                src="/rectangle-2.svg"
              />
              <a className="a8">
                 
                <a className="a9" href="tel:+918088698016" target="_blank">
                  <span className="span7">+918088698016</span>
                </a>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
