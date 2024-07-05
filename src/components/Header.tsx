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
    <header className={`header5 ${className}`}>
      <div className="rectangle-parent8">
        <div className="frame-child15" />
        <a className="logo8">Logo</a>
      </div>
      <div className="header-inner">
        <FormControl
          className="frame-formcontrol"
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
        <div className="frame-parent34">
          <FormControl
            className="parent1"
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
            <div className="input-element-content8">
              <div className="signed-by-base-input-element8" />
              <a className="text26">Social Media Marketing</a>
            </div>
          </div>
          <div className="input-element-content9">
            <div className="signed-by-base-input-element9" />
            <div className="text27">{`Analytics & Tracking
`}</div>
          </div>
        </div>
      </div>
      <div className="header-inner1">
        <FormControl
          className="parent2"
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
        <div className="input-element-content-group">
          <div className="input-element-content10">
            <div className="signed-by-base-input-element10" />
            <div className="text28">Get Free Audit Report</div>
          </div>
          <div className="frame-parent35">
            <div className="image-7-frame">
              <img
                className="image-7-icon8"
                loading="lazy"
                alt=""
                src="/image-7@2x.png"
              />
            </div>
            <div className="vector-container">
              <img className="frame-child16" alt="" src="/rectangle-2.svg" />
              <a className="a9">
                 
                <a className="a10" href="tel:+918088698016" target="_blank">
                  <span className="span8">+918088698016</span>
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