import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./FrameComponent12.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={`f-a-q-content-wrapper ${className}`}>
      <div className="f-a-q-content">
        <div className="f-a-q-header">
          <div className="f-a-q-title">
            <div className="f-a-q-heading">
              <h2 className="frequently-asked-questions1">
                Frequently Asked Questions
              </h2>
              <div className="f-a-q-subheading">
                <div className="have-more-questions1">
                  Have more questions? We’d be happy to answer them!
                </div>
              </div>
            </div>
            <div className="f-a-q-button">
              <div className="f-a-q-button-child" />
              <div className="get-in-touch2">Get in touch</div>
            </div>
          </div>
        </div>
        <div className="f-a-q-items">
          <FormControl
            className="faqs6"
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
                marginLeft: "24.399999999999977px",
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
            className="faqs7"
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
                marginLeft: "24.399999999999977px",
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
            className="faqs8"
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
                marginLeft: "24.399999999999977px",
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
            className="faqs9"
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
                marginLeft: "24.399999999999977px",
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
            className="faqs10"
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
                marginLeft: "24.399999999999977px",
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
            className="faqs11"
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
                marginLeft: "24.399999999999977px",
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
  );
};

export default FrameComponent1;
