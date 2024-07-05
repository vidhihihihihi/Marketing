import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./Container.css";

export type ContainerType = {
  className?: string;
};

const Container: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    
    <div className={`container3 ${className}`}>
      <div className="navigation">
        <div className="controls">
          <div className="previous">
            <div className="container-parent">
              <div className="container4">
                <img className="left-icon" alt="" src="/vector-2.svg" />
                <img
                  className="right-icon"
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
              <div className="next">
                <img className="left-icon1" alt="" src="/vector-4.svg" />
                <img
                  className="right-icon1"
                  loading="lazy"
                  alt=""
                  src="/vector-5.svg"
                />
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="content1">
              <div className="image" />
              <h1 className="name">Name</h1>
              <h2 className="designation">Designation</h2>
            </div>
            <div className="background" />
          </div>
          <div className="controls1">
            <div className="indicators">
              <textarea
                className="container5"
                placeholder="Testimonials"
                rows={13}
                cols={23}
              />
            </div>
            <div className="buttons">
              <div className="next1" />
              <div className="previous1" />
              <div className="previous2" />
            </div>
          </div>
        </div>
        <div className="container-container">
          <div className="container6">
            <div className="content2">
              <div className="header">
                <div className="titles">
                  <h2 className="frequently-asked-questions">
                    Frequently Asked Questions
                  </h2>
                  <div className="subtitle">
                    <div className="have-more-questions">
                      Have more questions? We’d be happy to answer them!
                    </div>
                  </div>
                </div>
                <div className="button1">
                  <div className="button-child" />
                  <div className="get-in-touch1">Get in touch</div>
                </div>
              </div>
            </div>
            <div className="questions">
              <FormControl
                className="faqs"
                variant="standard"
                sx={{
                  borderColor: "#000",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  width: "100%",
                  height: "69.40000000000009px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "69.40000000000009px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "69.40000000000009px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "69.40000000000009px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "69.40000000000009px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#555",
                    fontSize: 30,
                    fontWeight: "Medium",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "24.40000000000009px",
                  },
                }}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="30.7px"
                      height="30.7px"
                      src="/iconchevron-left.png"
                      style={{ marginRight: "31.70000000000009px" }}
                    />
                  )}
                >
                  <MenuItem>Question -1</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <FormControl
                className="faqs1"
                variant="standard"
                sx={{
                  borderColor: "#000",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  width: "100%",
                  height: "69.40000000000009px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "69.40000000000009px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "69.40000000000009px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "69.40000000000009px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "69.40000000000009px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#555",
                    fontSize: 30,
                    fontWeight: "Medium",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "24.40000000000009px",
                  },
                }}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="30.7px"
                      height="30.7px"
                      src="/iconchevron-left-1.png"
                      style={{ marginRight: "31.70000000000009px" }}
                    />
                  )}
                >
                  <MenuItem>Question -2</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <FormControl
                className="faqs2"
                variant="standard"
                sx={{
                  borderColor: "#000",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  width: "100%",
                  height: "69.40000000000009px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "69.40000000000009px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "69.40000000000009px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "69.40000000000009px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "69.40000000000009px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#555",
                    fontSize: 30,
                    fontWeight: "Medium",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "24.40000000000009px",
                  },
                }}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="30.7px"
                      height="30.7px"
                      src="/iconchevron-left-2.png"
                      style={{ marginRight: "31.70000000000009px" }}
                    />
                  )}
                >
                  <MenuItem>Question -3</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <FormControl
                className="faqs3"
                variant="standard"
                sx={{
                  borderColor: "#000",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  width: "100%",
                  height: "69.40000000000009px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "69.40000000000009px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "69.40000000000009px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "69.40000000000009px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "69.40000000000009px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#555",
                    fontSize: 30,
                    fontWeight: "Medium",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "24.40000000000009px",
                  },
                }}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="30.7px"
                      height="30.7px"
                      src="/iconchevron-left-3.png"
                      style={{ marginRight: "31.70000000000009px" }}
                    />
                  )}
                >
                  <MenuItem>Question -4</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <FormControl
                className="faqs4"
                variant="standard"
                sx={{
                  borderColor: "#000",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  width: "100%",
                  height: "69.40000000000009px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "69.40000000000009px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "69.40000000000009px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "69.40000000000009px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "69.40000000000009px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#555",
                    fontSize: 30,
                    fontWeight: "Medium",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "24.40000000000009px",
                  },
                }}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="30.7px"
                      height="30.7px"
                      src="/iconchevron-left-4.png"
                      style={{ marginRight: "31.70000000000009px" }}
                    />
                  )}
                >
                  <MenuItem>Question -5</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <FormControl
                className="faqs5"
                variant="standard"
                sx={{
                  borderColor: "#000",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  width: "100%",
                  height: "69.40000000000009px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "69.40000000000009px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "69.40000000000009px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "69.40000000000009px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "69.40000000000009px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#555",
                    fontSize: 30,
                    fontWeight: "Medium",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "24.40000000000009px",
                  },
                }}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="30.7px"
                      height="30.7px"
                      src="/iconchevron-left-5.png"
                      style={{ marginRight: "31.70000000000009px" }}
                    />
                  )}
                >
                  <MenuItem>Question -6</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
