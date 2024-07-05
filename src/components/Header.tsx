import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./Header.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={`header2 ${className}`}>
      <div className="rectangle-parent1">
        <div className="frame-child3" />
        <a className="logo2">Logo</a>
      </div>
      <div className="header-inner">
        <FormControl
          className="group"
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
      <div className="header-child">
        <div className="frame-parent6">
          <FormControl
            className="frame-formcontrol"
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
          <div className="input-element-content-container">
            <div className="input-element-content2">
              <div className="signed-by-base-input-element2" />
              <a className="text10">Social Media Marketing</a>
            </div>
          </div>
          <div className="input-element-content3">
            <div className="signed-by-base-input-element3" />
            <div className="text11">{`Analytics & Tracking
`}</div>
          </div>
        </div>
      </div>
      <div className="header-inner1">
        <FormControl
          className="parent1"
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
              <img width="8px" height="5.6px" src="/vector-2.svg" style={{}} />
            )}
          >
            <MenuItem>Services</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className="header-inner2">
        <div className="input-element-content-parent">
          <div className="input-element-content4">
            <div className="signed-by-base-input-element4" />
            <div className="text12">Get Free Audit Report</div>
          </div>
          <div className="frame-parent7">
            <div className="image-7-container">
              <img
                className="image-7-icon2"
                loading="lazy"
                alt=""
                src="/image-7@2x.png"
              />
            </div>
            <div className="vector-parent">
              <img className="rectangle-icon" alt="" src="/rectangle-2.svg" />
              <a className="a2">
                 
                <a className="a3" href="tel:+918088698016" target="_blank">
                  <span className="span2">+918088698016</span>
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
